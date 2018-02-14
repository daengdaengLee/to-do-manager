import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import uuidv1 from 'uuid/v1';

// import Components
import MainTemplate from '../../templates/MainTemplate';
import MainTitle from '../../molecules/MainTitle';
import ToDosCard from '../../organisms/ToDosCard';

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      newToDo: '',
      toDos: {},
    };
    this._loadToDos = this._loadToDos.bind(this);
    this._toggleComplete = this._toggleComplete.bind(this);
    this._updateToDo = this._updateToDo.bind(this);
    this._deleteItem = this._deleteItem.bind(this);
    this._controlNewToDo = this._controlNewToDo.bind(this);
    this._addToDo = this._addToDo.bind(this);
  }

  render() {
    const { _toggleComplete, _deleteItem, _updateToDo, _controlNewToDo, _addToDo } = this;
    const { toDos, newToDo, isLoading } = this.state;
    return <MainTemplate
      isLoading={isLoading}
      mainTitle={<MainTitle />}
      mainContent={<ToDosCard
        newToDo={newToDo}
        toDos={toDos}
        onChangeText={_controlNewToDo}
        onSubmitEditing={_addToDo}
        toggleComplete={_toggleComplete}
        deleteItem={_deleteItem}
        updateToDo={_updateToDo}
      />}
    />;
  }

  componentDidMount() {
    this._loadToDos();
  }

  _saveToDos(newToDos) {
    try {
      AsyncStorage.setItem('toDos', JSON.stringify(newToDos));
    } catch(err) {
      console.log(err);
    }
  }

  async _loadToDos() {
    try {
      const toDos = await AsyncStorage.getItem('toDos');
      const parsedToDos = JSON.parse(toDos);
      this.setState({ isLoading: false, toDos: parsedToDos || {} });
    } catch(err) {
      console.log(err);
    }
  }

  _toggleComplete(id) {
    this.setState(prevState => {
      const toDos = {
        ...prevState.toDos,
        [id]: {
          ...prevState.toDos[id],
          isCompleted: !prevState.toDos[id].isCompleted,
        },
      };
      this.saveToDos(toDos);
      return { toDos };
    });
  }

  _deleteItem(id) {
    this.setState(prevState => {
      const toDos = { ...prevState.toDos };
      delete toDos[id];
      this._saveToDos(toDos);
      return { toDos };
    });
  }

  _updateToDo(id, text) {
    this.setState(prevState => {
      const toDos = {
        ...prevState.toDos,
        [id]: {
          ...prevState.toDos[id],
          text,
        },
      };
      this._saveToDos(toDos);
      return { toDos };
    });
  }

  _controlNewToDo(text) {
    this.setState({
      newToDo: text,
    });
  }

  _addToDo() {
    const { newToDo } = this.state;
    if(newToDo !== '') {
      this.setState(prevState => {
        const ID = uuidv1();
        const newState = {
          ...prevState,
          newToDo: '',
          toDos: {
            ...prevState.toDos,
            [ID]: {
              id: ID,
              isCompleted: false,
              text: newToDo,
              createdAt: Date.now(),
            },
          },
        };
        this._saveToDos(newState.toDos);
        return newState;
      });
    }
  }

}

export default MainPage;