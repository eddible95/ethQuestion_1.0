import 'package:flutter/material.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';
import 'package:google_fonts/google_fonts.dart';

class DrawerComponent extends StatelessWidget {
  final String emailAddress;
  final String privateKey;
  final String accountType;

  DrawerComponent(
      {Key key, this.emailAddress, this.privateKey, this.accountType})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: <Widget>[
          UserAccountsDrawerHeader(
            currentAccountPicture: Icon(
              Icons.account_circle,
              size: 80.0,
              color: Colors.white,
            ),
            accountName: Text(
              "Account Type: ${this.accountType}",
              style: GoogleFonts.ubuntu(
                textStyle: TextStyle(color: Colors.white),
              ),
            ),
            accountEmail: Text(
              emailAddress,
              style: GoogleFonts.ubuntu(
                textStyle: TextStyle(color: Colors.white),
              ),
            ),
            decoration: BoxDecoration(
              image: DecorationImage(
                fit: BoxFit.fill,
                image: AssetImage('./assets/ethereum.jpg'),
              ),
            ),
          ),
          ListTile(
            title: Text(
              'Home',
            ),
            trailing: Icon(
              Icons.home,
            ),
            onTap: () => Navigator.popAndPushNamed(context, "/home",
                arguments: [emailAddress, privateKey, accountType]),
          ),
          ListTile(
            title: Text(
              'About',
            ),
            trailing: Icon(
              Icons.help,
            ),
            onTap: () => Navigator.popAndPushNamed(context, "/about",
                arguments: [emailAddress, privateKey, accountType]),
          ),
          ListTile(
            title: Text(
              'Profile',
            ),
            trailing: Icon(
              Icons.account_circle,
            ),
            onTap: () => Navigator.popAndPushNamed(context, "/userProfile",
                arguments: [emailAddress, privateKey, accountType]),
          ),
          ListTile(
            title: Text(
              'Leaderboard',
            ),
            trailing: Icon(
              MdiIcons.trophy,
            ),
            onTap: () => Navigator.popAndPushNamed(context, "/leaderboard",
                arguments: [emailAddress, privateKey, accountType]),
          ),
          ListTile(
            title: Text(
              'Ask Question',
            ),
            trailing: Icon(
              Icons.create,
            ),
            onTap: () => Navigator.popAndPushNamed(context, "/newQuestion",
                arguments: [emailAddress, privateKey, accountType]),
          ),
          ListTile(
            title: Text(
              'Feedback',
            ),
            trailing: Icon(
              Icons.feedback,
            ),
            onTap: () => Navigator.popAndPushNamed(context, "/feedback",
                arguments: [emailAddress, privateKey, accountType]),
          ),
          accountType == "Admin"
              ? ListTile(
                  title: Text(
                    'Admin Settings',
                  ),
                  trailing: Icon(
                    Icons.settings,
                  ),
                  onTap: () => Navigator.popAndPushNamed(context, "/admin",
                      arguments: [emailAddress, privateKey, accountType]),
                )
              : null,
          ListTile(
            title: Text(
              'Log Out',
            ),
            trailing: Icon(
              Icons.settings_power,
            ),
            onTap: () => Navigator.pushReplacementNamed(
              context,
              "/login",
            ),
          ),
        ],
      ),
    );
  }
}
