import 'package:ethquestion/views/login_view.dart';
import 'package:flutter/material.dart';
import 'package:ethquestion/router.dart' as router;
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Blockchain-Based Question Answering System',
      theme: ThemeData(
        primaryColor: Colors.black,
        textTheme: GoogleFonts.ubuntuTextTheme(
          Theme.of(context).textTheme,
        ),
      ),
      home: LoginView(),
      onGenerateRoute: router.generateRoute,
    );
  }
}
