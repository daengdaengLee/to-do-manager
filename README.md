# 할 일 관리 앱

> React Native 기반 할 일 관리 앱입니다.
>
> 제작 과정에서 Expo XDE 를 개발 도구로 사용했습니다.
>
> [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) 을 적용하여 컴포넌트의 재사용성을 높이고 앱이 다른 플랫폼으로 확장하기 쉽도록 설계했습니다.

## 둘러보기

0. [들어가며](#0-들어가며)
1. [데모 페이지](#1-데모-페이지)
2. [컴포넌트](#2-컴포넌트)
3. [HOC](#3-HOC)
4. [마치며](#4-마치며)

## 0. 들어가며

React Native 로 제작한 할 일 관리 앱입니다.

개발 과정에서 Expo XDE 를 이용해 생산성을 높였습니다. Expo XDE 는 직관적이고 쉬운 사용법을 바탕으로 React Native 기반 앱을 쉽게 실제 디바이스에서 테스트하고 완성된 앱 형태로 쉽게 배포할 수 있도록 도와줍니다.

[Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) 을 적용하여 개발 생산성을 높이려고 시도했습니다. 컴포넌트의 재사용성을 높이고 앱이 다른 플랫폼으로 확장하기 쉽도록 설계했습니다.

## 1. 데모 페이지

모바일 디바이스에서 데모 앱을 확인하기 위해서는 [Expo Client](https://expo.io/tools#client) 를 설치해야 합니다.

Expo Client 로 <https://expo.io/@daengdaenglee/to-do-manager> 에서 QR 코드를 스캔하면 됩니다.

APK 파일은 [여기](https://exp-shell-app-assets.s3-us-west-1.amazonaws.com/android%2F%40daengdaenglee%2Fto-do-manager-3fdb74c5-11a2-11e8-8e43-0a580a78271a-signed.apk)에서 다운받을 수 있습니다. IPA 파일은 제공하지 않습니다.

Google Play 나 Apple 의 App Store 에서 다운받을 수 **없습니다**.

## 2. 컴포넌트

- Atoms
  - Button
  - MyAppLoading
  - MyScrollView
  - MyStatusBar
  - MyText
  - MyTextInput
  - MyView
- Molecules
  - ActionButton
  - ActionButtons
  - CompleteButton
  - InputToDo
  - MainTitle
  - ToDoTextField
- Organisms
  - ToDoItem
  - ToDoList
  - ToDosCard
- Templates
  - MainTemplate
- Pages
  - MainPage

### Atoms

react-native 에서 기본으로 제공하는 컴포넌트를 커스터마이징한 컴포넌트입니다.

#### Button

- return:

  react-native 에서 제공하는 TouchableOpacity 컴포넌트

- props:

  - children: TouchableOpacity 사이에서 표현할 랜더링 가능한 내용
  - ownEvent: TouchableOpacity 에 적용할 이벤트 객체
      ```javascript
      { eventName: eventFunction }

      // example
      { onPressOut: () => console.log('You press the button!') }
      ```

#### MyAppLoading

- return:

  expo 에서 제공하는 AppLoading 컴포넌트

#### MyScrollView

- return:

  react-native 에서 제공하는 ScrollView 컴포넌트

- props:

  - children: ScrollView 사이에서 표현할 랜더링 가능한 내용
  - styleNames: 적용할 스타일 이름을 담고 있는 배열
      ```javascript
      ['style name 1', 'style name 2']
      ```
      유효하지 않은 스타일 이름은 withValidProps HOC 를 통해 걸러냅니다.

#### MyStatusBar

- return:

  - react-native 에서 제공하는 StatusBar 컴포넌트
  - `barStyle="light-content"` 를 적용한 상태

#### MyText

- return:

  react-native 에서 제공하는 Text 컴포넌트

- props:

  - children: Text 사이에서 표현할 string 타입의 내용
  - styleNames: 적용할 스타일 이름을 담고 있는 배열
      ```javascript
      ['style name 1', 'style name 2']
      ```
      유효하지 않은 스타일 이름은 withValidProps HOC 를 통해 걸러냅니다.

#### MyTextInput

- return:

  react-native 에서 제공하는 TextInput 컴포넌트

- props:

  - styleNames: 적용할 스타일 이름을 담고 있는 배열
      ```javascript
      ['style name 1', 'style name 2']
      ```
      유효하지 않은 스타일 이름은 withValidProps HOC 를 통해 걸러냅니다.
  - multiline: 여러 줄을 표현할 지 결정하는 boolean 값
  - value: TextInput 에 표현한 string 타입의 내용
  - onChangeText: 이벤트 함수
  - onBlur: 이벤트 함수
  - placeholder: value 가 없을 때 표현할 string 타입 내용
  - placeholderTextColor: 색상을 표현하는 string
  - autoCorrect: 자동 수정 기능을 사용할 지 결정하는 boolean 값
  - onSubmitEditing: 이벤트 함수

#### MyView

- return:

  react-native 에서 제공하는 View 컴포넌트

- props:

  - children: View 사이에서 표현할 랜더링 가능한 내용
  - styleNames: 적용할 스타일 이름을 담고 있는 배열
      ```javascript
      ['style name 1', 'style name 2']
      ```
      유효하지 않은 스타일 이름은 withValidProps HOC 를 통해 걸러냅니다.

### Molecules

Atoms 를 바탕으로 조합한 가장 기초적인 기능을 가지고 있는 컴포넌트 블록입니다.

한 Molecule 은 하나의 기능만 수행하도록 설계합니다.

#### ActionButton

- return:

  아이콘을 표현하고 있는 Button 컴포넌트

- props:

  - eventFunc: Button 컴포넌트에 적용할 onPressOut 이벤트에 대한 이벤트 리스너 function
  - icon: 표현할 string 아이콘

#### ActionButtons

- return:

  ActionButton 컴포넌트

- props:

  - isEditing: 어떤 ActionButton 을 보여줄지 결정하는 boolean 값
  - trueProps: 수정 상태일 때 보여줄 ActionButton 에 전달할 props 객체
  - falseProps: 수정 상태가 아닐 때 보여줄 ActionButton 에 전달할 props 객체

#### CompleteButton

- return:

  동그란 원을 표현하는 Button 컴포넌트

- props:

  - isCompleted: 버튼 색을 결정하는 boolean 값
  - eventFunc: Button 컴포넌트에 적용할 onPressOut 이벤트에 대한 이벤트 리스너 function

#### InputToDo

- return:

  새로운 할 일을 입력받는 데 쓰일 MyTextInput 컴포넌트

- props:

  - newToDo: 할 일을 표현할 string 내용
  - onChangeText: MyTextInput 컴포넌트에 적용할 이벤트 리스너 function
  - onSubmitEditing: MyTextInput 컴포넌트에 적용할 이벤트 리스너 function

#### MainTitle

- return:

  - 'To Do Manager' 라는 제목을 표현하는 MyText 컴포넌트
  - mainTitle 스타일 적용

#### ToDoTextField

- return:

  - 할 일 목록을 표현하는 컴포넌트
  - 수정 중일 때는 MyTextInput 컴포넌트
  - 수정 중이 아닐 때는 MyText 컴포넌트

- props:

  - isEditing: 수정 중인지 알려주는 boolean
  - trueProps: 수정 중일 때 MyTextInput 컴포넌트에 전달할 props 객체
  - falseProps: 수정 중이 아닐 때 MyText 컴포넌트에 전달할 props 객체

### Organisms

Atoms 나 Molecules 를 조합하여 만든 인터페이스의 한 영역

#### ToDoItem

- return:

  - 할 일 목록 하나를 표현하는 컴포넌트
  - 완료 버튼 + 할 일 텍스트 + 수정 버튼 + 삭제 버튼 / 완료 버튼 + 할 일 수정 폼 + 수정 완료 버튼 

- props:

  - id: 할 일 목록의 고유 id, string
  - isCompleted: 완료 여부를 표현하는 boolean
  - toggleComplete: 완료 버튼 누를 때 실행할 이벤트 리스너 function
  - deleteItem: 삭제 버튼 누를 때 실행할 이벤트 리스너 function
  - updateToDo: 수정 완료 버튼 누를 때 실행할 이벤트 리스너 function
  - text: 할 일 목록 내용, string

#### ToDoList

- return:

  - 할 일 목록 리스트를 표현하는 컴포넌트
  - MyScrollView 로 스크롤 가능하게 표현

- props:

  - toDos: 할 일 목록 리스트를 담고 있는 object
  - toggleComplete: 완료 버튼 누를 때 실행할 이벤트 리스너 function
  - deleteItem: 삭제 버튼 누를 때 실행할 이벤트 리스너 function
  - updateToDo: 수정 완료 버튼 누를 때 실행할 이벤트 리스너 function

#### ToDosCard

- return:

  - 새로운 할 일 입력할 수 있는 입력 폼과 할 일 목록 리스트를 랜더링하는 컴포넌트
  - InputToDo + ToDoList

- props:

  - newToDo: 새로운 할 일 내용, string
  - onChangeText: 이벤트 리스너 function
  - onSubmitEditing: 이벤트 리스너 function
  - toDos: 할 일 목록 담고 있는 object
  - toggleComplete: 이벤트 리스너 function
  - deleteItem: 이벤트 리스너 function
  - updateToDo: 이벤트 리스너 function

### Templates

화면 레이아웃을 설계하는 컴포넌트입니다.

#### MainTemplate

- return:

  메인 화면을 구성하는 레이아웃 표현한 컴포넌트

- props:

  - mainTitle: 메인 제목으로 표현할 내용
  - mainContent: 메인 내용으로 표현할 내용
  - isLoading: 초기 로딩 완료 여부를 나타내는 boolean

### Pages

Template Component 의 특정 인스턴스입니다.

#### MainPage

- return:

  실제 메인 화면

## 3. HOC
> Higher Order Components

- withConditionRender
- withValidProps

### withConditionRender

conditionFunc, FalseComp, TrueComp 를 순서대로 입력받습니다.

0. conditionFunc 는 props 를 입력값으로 받아 boolean 값을 반환하는 predicator 함수입니다.
1. FalseComp 는 conditionFunc 함수가 false 를 반환했을 때 랜더링되는 컴포넌트입니다.
2. TrueComp 는 conditionFunc 함수가 true 를 반환했을 때 랜더링되는 컴포넌트입니다.

세 입력값을 모두 받으면 리액트 컴포넌트를 반환합니다. 이 컴포넌트는 세 가지 props 를 필수로 받아야 합니다.

- conditionFunc 에서 조건 평가에 사용될 prop
- TrueComp 를 랜더링 할 때 props 로 전달할 객체 형태의 trueProps prop
- FalseComp 를 랜더링 할 때 props 로 전달할 객체 형태의 falseProps prop

### withValidProps

validator, Comp 를 순서대로 입력받습니다.

0. validator 는 props 를 입력값으로 받아 올바른 형태의 props 객체를 반환하는 함수입니다. 기존 props 를 변경하는 것이 아니라 새로운 props 객체를 반환해야 합니다.
1. Comp 는 랜더링하고 싶은 컴포넌트입니다.

두 입력값을 모두 받으면 리액트 컴포넌트를 반환합니다. 이 컴포넌트에 전달하는 props 는 항상 validator 를 거쳐 전달됩니다. 즉, 실제로 컴포넌트에 전달되는 props 는 validator(props) 입니다.

## 4. 마치며

Atomic Design 이 얼마나 개발을 효율적으로 바꾸는 지 확인하기 위해 웹 앱으로 포팅하는 프로젝트를 계획하고 있습니다. 웹 앱으로 포팅하는 과정에서 기존 프로젝트를 얼마나 재사용할 수 있는지 확인하고자 합니다.

처음으로 돌아가려면 [여기](#할-일-관리-앱)를 클릭하세요.
