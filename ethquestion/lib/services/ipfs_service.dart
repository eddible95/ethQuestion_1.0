import 'dart:io';
import 'package:path/path.dart';
import 'package:async/async.dart';
import 'package:http/http.dart' as http;

class IpfsService {

  Future<String> getIpfsHash(File imageFile) async {
    var stream =
        new http.ByteStream(DelegatingStream.typed(imageFile.openRead()));
    var length = await imageFile.length();
    // Using the ipfs.infura.io node
    Uri url = Uri.parse("https://ipfs.infura.io:5001/api/v0/add");
    var request = http.MultipartRequest(
      "POST",
      url,
    );
    var multipartFile = new http.MultipartFile('file', stream, length,
        filename: basename(imageFile.path));
    request.files.add(multipartFile);
    var response = await request.send();
    if (response.statusCode == 200) {
      var body = await response.stream.bytesToString();
      var result = body
          .replaceAll('"', '')
          .replaceAll(new RegExp(r"[{}]"), '')
          .split(new RegExp(r"[\s,:]"));
      return result[3];
    }
    return null;
  }

  Future<String> getIpfsObject(String imageHash) async {
    var url = 'https://ipfs.infura.io:5001/api/v0/get?arg=$imageHash';
    var response = await http.read(url);
    return response;
  }
}
