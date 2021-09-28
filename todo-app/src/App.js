import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트의 기초 알아보기!',
      checked : true,
    },
    {
      id : 2,
      text : '컴포넌트 스타일링!',
      checked : false,
    },
    {
      id : 3,
      text : '일정관리 앱 만들기!',
      checked : false,
    }
  ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  // todos 배열에 새 객체를 추가하는 함수
  const onInsert = useCallback( text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
  },[todos]);


  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
