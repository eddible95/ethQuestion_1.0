import 'package:flutter/material.dart';

class AvatarIcon extends StatelessWidget {
  static final iconList = ['alligator', 'anteater', 'armadillo', 'auroch', 'axolotl',
    'badger', 'bat', 'beaver', 'buffalo', 'camel', 'capybara',
    'chameleon', 'cheetah', 'chinchilla', 'chipmunk', 'chupacabra',
    'cormorant', 'coyote', 'crow', 'dingo', 'dinosaur', 'dolphin',
    'duck', 'elephant', 'ferret', 'fox', 'frog', 'giraffe', 'gopher',
    'grizzly', 'hedgehog', 'hippo', 'hyena', 'ibex', 'ifrit', 'iguana',
    'jackal', 'kangaroo', 'koala', 'kraken', 'lemur', 'leopard',
    'liger', 'llama', 'manatee', 'mink', 'monkey', 'moose', 'narwhal',
    'orangutan', 'otter', 'panda', 'penguin', 'platypus',
    'pumpkin', 'python', 'quagga', 'rabbit', 'raccoon', 'rhino',
    'sheep', 'shrew', 'skunk', 'squirrel', 'tiger', 'turtle', 'walrus',
    'wolf', 'wolverine', 'wombat'];
  final int index;

  AvatarIcon(this.index);

  @override
  Widget build(BuildContext context) {
    var avatarIconList = List<String>();
    for (String icon in AvatarIcon.iconList) {
      avatarIconList.add('https://ssl.gstatic.com/docs/common/profile/${icon}_lg.png');
    }
    return CircleAvatar(
      backgroundImage: NetworkImage(
          avatarIconList[index]),
      backgroundColor: Colors.black,
    );
  }

}