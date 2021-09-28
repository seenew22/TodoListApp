import React, {useState, useCallback} from 'react';
import './TodoInsert.scss';
import {MdAdd} from 'react-icons/md';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState("");

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue(''); // value 값 초기화

        // submit 이벤트는 브라우저에서 새로고침을 발생시킨다
        // 그를 방지하기 위함
        e.preventDefault();
    },[onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요!"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;