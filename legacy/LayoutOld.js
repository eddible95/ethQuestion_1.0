import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Head from 'next/head';
import CustomHeader from './Header';
import AdminHeader from './AdminHeader';
import Footer from './Footer';

// export default props => {
//   const accountType = props.accountType;
//   return (
//       <Container style={{width:"100%", height:"100vh"}}>
//           <Head>
//               <link
//                   rel="stylesheet"
//                   href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
//               />
//               <link rel="shortcut icon" href="/static/ethIcon.ico" />
//               <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//               <title>Block-Chain Based Question Answering System</title>
//           </Head>
//           { accountType == "Admin" ? <AdminHeader/> : <CustomHeader/>}
//           {props.children}
//           <Divider hidden/>
//           <Footer/>
//       </Container>
//   );
// };

class Layout extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let accountType = this.props.accountType;
    return (
        <React.Fragment>
          <Head>
              <link
                  rel="stylesheet"
                  href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
              />
              <link rel="shortcut icon" href="/static/ethIcon.ico" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <title>Block-Chain Based Question Answering System</title>
          </Head>
          { accountType == "Admin" ? <AdminHeader/> : <CustomHeader/> }
          {this.props.children}
          <Divider hidden/>
          <Footer/>
        </React.Fragment>
    );
  }
}

export default Layout;
