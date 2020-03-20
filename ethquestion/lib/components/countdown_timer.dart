import 'dart:async';
import 'package:flutter/material.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';

class Countdown extends StatefulWidget {
  final int seconds;
  final int questionState;
  final Function votePhase;
  final Function rewardPhase;
  final Function timeExtension;
  final bool _balanceError;
  final Function fixBalance;

  Countdown(this.seconds, this.questionState, this.votePhase, this.rewardPhase,
      this.timeExtension, this._balanceError, this.fixBalance);

  @override
  _CountdownState createState() => _CountdownState(
      this.seconds,
      this.questionState,
      this.votePhase,
      this.rewardPhase,
      this.timeExtension,
      this._balanceError,
      this.fixBalance);
}

class _CountdownState extends State<Countdown> {
  Timer _timer;
  int _seconds;
  int _questionState;
  Function _votePhase;
  Function _rewardPhase;
  Function _timeExtension;
  Function _fixBalance;
  bool _votingEnable = false;
  bool _rewardEnable = false;
  bool _balanceError;

  _CountdownState(
      this._seconds,
      this._questionState,
      this._votePhase,
      this._rewardPhase,
      this._timeExtension,
      this._balanceError,
      this._fixBalance);

  Widget _buildVotingButton(BuildContext context) {
    return IconButton(
        icon: Icon(MdiIcons.clock),
        color: Colors.red,
        onPressed: _votingEnable
            ? () {
                setState(() {
                  _showChoiceDialog(context);
                });
              }
            : null);
  }

  Widget _buildRewardButton() {
    return IconButton(
        icon: Icon(MdiIcons.clock),
        color: Colors.red,
        onPressed: _rewardEnable
            ? () {
                setState(() {
                  _rewardPhase();
                });
              }
            : null);
  }

  Future<void> _showChoiceDialog(BuildContext context) {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Select From:"),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                GestureDetector(
                  child: Text("Extend Deadline"),
                  onTap: () {
                    _timeExtension();
                    Navigator.of(context).pop();
                  },
                ),
                Padding(
                  padding: EdgeInsets.all(15.0),
                ),
                _balanceError
                    ? GestureDetector(
                        child: Text("Fix Balance Error"),
                        onTap: () {
                          _fixBalance();
                          Navigator.of(context).pop();
                        },
                      )
                    : GestureDetector(
                        child: Text("Proceed to Voting Phase"),
                        onTap: () {
                          _votePhase();
                          Navigator.of(context).pop();
                        },
                      )
              ],
            ),
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Row(children: <Widget>[
      Center(
        child: Text(
          'Time Remaining: ${constructTime(_seconds)}',
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
      ),
      _questionState == 0
          ? _buildVotingButton(context)
          : _questionState == 1 ? _buildRewardButton() : SizedBox(),
    ]);
  }

  // Time formatting, converted to the corresponding hh:mm:ss format according to the total number of seconds
  String constructTime(int seconds) {
    int hour = seconds ~/ 3600;
    int minute = seconds % 3600 ~/ 60;
    int second = seconds % 60;

    return formatTime(hour) +
        ":" +
        formatTime(minute) +
        ":" +
        formatTime(second);
  }

  // Digital formatting, converting 0-9 time to 00-09
  String formatTime(int timeNum) {
    return timeNum < 10 ? "0" + timeNum.toString() : timeNum.toString();
  }

  @override
  void initState() {
    super.initState();
    startTimer();
  }

  void startTimer() {
    if (_seconds != 0) {
      // Set 1 second callback
      const period = const Duration(seconds: 1);
      _timer = Timer.periodic(period, (timer) {
        // Update interface
        setState(() {
          // minus one second because it calls back once a second
          _seconds--;
        });
        if (_seconds == 0) {
          // Countdown seconds 0, cancel timer
          cancelTimer();
          setState(() {
            if (_questionState == 0) {
              _votingEnable = true;
            } else if (_questionState == 1) {
              _rewardEnable = true;
              _votingEnable = false;
            } else {
              _rewardEnable = false;
              _votingEnable = false;
            }
          });
        }
      });
    } else {
      setState(() {
        if (_questionState == 0) {
          _votingEnable = true;
        } else if (_questionState == 1) {
          _rewardEnable = true;
          _votingEnable = false;
        } else {
          _rewardEnable = false;
          _votingEnable = false;
        }
      });
    }
  }

  void cancelTimer() {
    if (_timer != null) {
      _timer.cancel();
      _timer = null;
    }
  }

  @override
  void dispose() {
    super.dispose();
    cancelTimer();
  }
}
