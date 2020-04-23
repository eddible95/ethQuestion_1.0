import 'package:ethquestion/data_object/question.dart';
import 'package:fuzzy/fuzzy.dart';
import 'dart:convert';
import 'package:crypto/crypto.dart';
import 'dart:math';

class Logger{

  String logging(String message){
    var now = DateTime.now();
    var months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];
    var date = months[now.month]+" "+now.day.toString()+" "+now.year.toString();
    var time = now.hour.toString() + ":" + now.minute.toString() + ":" + now.second.toString();
    var dateTime = date+' '+time+": "+message;
    return dateTime;
  }
}

class FuzzySearch{

  String _getTitle(var question) {
    return question['title'];
  }

  String _getContent(var question) {
    return question['content'];
  }

  String _getTags(var question) {
    return question['tags'].toString();
  }

  List fuzzySearch(List<Question> questionSummary, String searchText) {
    var list = [];
    for (int i = 0; i < questionSummary.length; i++) {
      list.add({
        "index": i,
        "address": questionSummary[i].questionAddress,
        "title": questionSummary[i].questionTitle,
        "content": questionSummary[i].content,
        "tags": questionSummary[i].tag
      });
    }
    var fuse = Fuzzy(
      list,
      options:
      FuzzyOptions(shouldSort: true, tokenize: true, threshold: 0.1, keys: [
        WeightedKey(name: 'title', getter: _getTitle, weight: 0.3),
        WeightedKey(name: 'content', getter: _getContent, weight: 0.4),
        WeightedKey(name: 'tags', getter: _getTags, weight: 0.3),
      ]),
    );
    return fuse.search(searchText);
  }
}

class PasswordHash {
  String generatePasswordHash(String password) {
    // Password Hashing
    var saltChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var saltCharsLength = saltChars.length;
    var salt = '';
    // Generate Random Salt of fixed length
    Random random = new Random();
    for (var i = 0; i<8; i++) {
      int randomNumber = random.nextInt(saltCharsLength);
      salt += saltChars[randomNumber];
    }
    var key = utf8.encode(salt);
    var bytes = utf8.encode("password");

    // HMAC-SHA1
    var hmacSha1 = new Hmac(sha1, key);

    // Convert to Hex String and format readable by JavaScript Verifier
    var digest = hmacSha1.convert(bytes);
    var hashedPassword = "sha1\$" + salt + "\$1\$" + digest.toString();
    return hashedPassword;
  }
}