import React, { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
    const [operation, setOperation] = useState('');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/${operation}?v1=${num1}&v2=${num2}`);
            setResult(response.data.result);
            setError('');
        } catch (error) {
            setError('Error: Invalid input');
            setResult('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Operation:
                    <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                        <option value="">--Select an operation--</option>
                        <option value="sum">Addition</option>
                        <option value="subtraction">Subtraction</option>
                        <option value="multiplication">Multiplication</option>
                        <option value="division">Division</option>
                    </select>
                </label>
                <br />
                <label>
                    Первое число:
                    <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                </label>
                <br />
                <label>
                    Первое число:
                    <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
                </label>
                <br />
                <button type="submit">Calculate</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {result && <div style={{ color: 'green' }}>Результат: {result}</div>}
        </div>
    );
};

export default Calculator;