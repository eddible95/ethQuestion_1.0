import 'package:ethquestion/views/about_view.dart';
import 'package:ethquestion/views/admin_settings_view.dart';
import 'package:ethquestion/views/feedback_view.dart';
import 'package:ethquestion/views/home_view.dart';
import 'package:ethquestion/views/leaderboard_view.dart';
import 'package:ethquestion/views/login_view.dart';
import 'package:ethquestion/views/new_question_view.dart';
import 'package:ethquestion/views/profile_view.dart';
import 'package:ethquestion/views/register_view.dart';
import 'package:ethquestion/views/show_question_view.dart';
import 'package:flutter/material.dart';

Route<dynamic> generateRoute(RouteSettings settings) {
  List arguments = settings.arguments;
  switch(settings.name) {
    case '/login':
      return MaterialPageRoute(builder: (context) => LoginView());
    case '/home':
      return MaterialPageRoute(builder: (context) => HomeView(emailAddress: arguments[0], privateKey: arguments[1], accountType: arguments[2],));
    case '/about':
      return MaterialPageRoute(builder: (context) => AboutView(emailAddress: arguments[0], privateKey: arguments[1], accountType: arguments[2],));
    case '/showQuestion':
      return MaterialPageRoute(builder: (context) => ShowQuestionView(emailAddress: arguments[0], privateKey: arguments[1], accountType: arguments[2], question: arguments[3],));
    case '/register':
      return MaterialPageRoute(builder: (context) => RegisterView());
    case '/userProfile':
      return MaterialPageRoute(builder: (context) => ProfileView(emailAddress: arguments[0], privateKey: arguments[1], accountType: arguments[2],));
    case '/leaderboard':
      return MaterialPageRoute(builder: (context) => LeaderboardView(emailAddress: arguments[0], privateKey: arguments[1], accountType: arguments[2],));
    case '/newQuestion':
      return MaterialPageRoute(builder: (context) => NewQuestionView(emailAddress: arguments[0], privateKey: arguments[1], accountType: arguments[2],));
    case '/feedback':
      return MaterialPageRoute(builder: (context) => FeedbackView(emailAddress: arguments[0], privateKey: arguments[1], accountType: arguments[2],));
    case '/admin':
      return MaterialPageRoute(builder: (context) => AdminView(emailAddress: arguments[0], privateKey: arguments[1], accountType: arguments[2],));
    default:
      return MaterialPageRoute(builder: (context) => LoginView());
  }
}