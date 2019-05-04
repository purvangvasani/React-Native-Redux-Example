import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { addUser } from './actions/user';

class App extends Component {

  state = {
    userName: '',
    users: []
  }

  userSubmitHandler = () => {
    if(this.state.userName.trim() === '') {
      return;
    }
    this.props.add(this.state.userName);
}

userNameChangeHandler = (value) => {
  this.setState({
    userName: value
  });    
}

usersOutput = () => {
   return (
    <FlatList style = { styles.listContainer }
      data = { this.props.users }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <ListItem 
          userName={ info.item.value }
        />
      )}
    />
  )
}

render() {
  return (
    <View style={ styles.container }>
      <View style = { styles.inputContainer }>
        <TextInput
          placeholder = "User Name"
          style = { styles.userInput }
          value = { this.state.userName }
          onChangeText = { this.userNameChangeHandler }
        ></TextInput>
        <Button title = 'Add' 
          style = { styles.userButton }
          onPress = { this.userSubmitHandler }
        />
        </View>
        <View style = { styles.listContainer }>
          { this.usersOutput() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  userInput: {
    width: '70%'
  },
  userButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addUser(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)