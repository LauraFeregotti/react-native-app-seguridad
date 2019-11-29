import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {
  _goBack = () => console.log('Went back');

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');

  
    return (
      <Appbar.Header>
        <Appbar.BackAction
          onPress={this._goBack}
        />
        <Appbar.Content
          title="Title"
          subtitle="Subtitle"
        />
        <Appbar.Action icon="menu" onPress={this._handleSearch} />
        
      </Appbar.Header>
    );
  
}

export default Header;