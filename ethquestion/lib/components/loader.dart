import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';

class Loader extends StatelessWidget {
  final String loadingMessage;

  Loader(this.loadingMessage);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Color(0xDDDDDD),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          SpinKitRipple(
            color: Colors.red,
            size: 50.0,
          ),
          SizedBox(
            height: 10,
          ),
          Text(
            loadingMessage,
            style: TextStyle(
              fontSize: 14,
              color: Colors.black,
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}