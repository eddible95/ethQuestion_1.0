import 'package:flutter/material.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';

class ErrorDialog extends StatelessWidget {
  final String title;
  final String content;

  ErrorDialog(this.title, this.content);

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Icon(MdiIcons.ethereum),
          Text(
            title,
            textAlign: TextAlign.center,
          ),
        ],
      ),
      content: Text(
        content,
      ),
    );
  }
}

class CustomDialog {
  final BuildContext context;
  final String title;
  final String content;

  CustomDialog(this.context, this.title, this.content) {
    _buildDialog(context, title, content);
  }

  Future<Widget> _buildDialog(BuildContext context, String title,
      String content) {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return ErrorDialog(
          title,
          content,
        );
      },
    );
  }
}