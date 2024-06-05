import { useEffect, useState } from "react";

export default function App() {

    const [darkMode, setDarkMode] = useState(false);
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [islem, setIslem] = useState('');
    const [complete, setComplete] = useState(false);
    const [text, setText] = useState('');

    function clearButton(e) {
        e.preventDefault();
        setIslem('');
        setNumber1('');
        setNumber2('');
        setText('');
        setComplete(false);
    }

    function editNumber(e) {
        e.preventDefault();
        const value = e.currentTarget.value;
        if(islem === '') {
            setNumber1(prev => prev + value)
            setText(prev => prev + value )
        } else {
            setNumber2(prev => prev + value)
            setText(prev => prev + value )
        }
    }

    function editProcess(e) {
        e.preventDefault();
        const value = e.currentTarget.value;
        if(value === 'topla') {
            setIslem('topla');
            setText(prev => prev + '+')
        }
        else if(value === 'çıkar') {
            setIslem('çıkar');
            setText(prev => prev + '-')
        }
        else if(value === 'çarp') {
            setIslem('çarp');
            setText(prev => prev + 'x')
        }
        else if(value === 'böl') {
            setIslem('böl');
            setText(prev => prev + '÷')
        }
    }

    useEffect(() => {
        function handleCalculate() {
            if(islem === 'topla') {
                setText((parseFloat(number1) + parseFloat(number2)).toFixed(2));
                setNumber1((parseFloat(number1) + parseFloat(number2)).toFixed(2));
                setNumber2('')
                setIslem('')
                setComplete(false)
            }
            if(islem === 'çıkar') {
                setText((parseFloat(number1) - parseFloat(number2)).toFixed(2));
                setNumber1((parseFloat(number1) - parseFloat(number2)).toFixed(2));
                setNumber2('')
                setIslem('')
                setComplete(false)
            }
            if(islem === 'çarp') {
                setText((parseFloat(number1) * parseFloat(number2)).toFixed(2));
                setNumber1((parseFloat(number1) * parseFloat(number2)).toFixed(2));
                setNumber2('')
                setIslem('')
                setComplete(false)
            }
            if(islem === 'böl') {
                setText((parseFloat(number1) / parseFloat(number2)).toFixed(2));
                setNumber1((parseFloat(number1) / parseFloat(number2)).toFixed(2));
                setNumber2('')
                setIslem('')
                setComplete(false)
            }
            
            
        }

        if(complete) {
            handleCalculate();
        }
    }, [complete, islem, number1, number2])

    return (
        <div style={darkMode ? {backgroundColor: '#1E293B'} : {}} className="full-page">

            <header style={darkMode ? {backgroundColor: '#0F172A'} : {}} className="header">
                <h3 style={darkMode ? {color: '#fff'} : {}}>Hesap Makinesi - React ve CSS ile hazırlandı.</h3>
            </header>

            <main className="main">
            <button onClick={() => (darkMode ? setDarkMode(false) : setDarkMode(true))} className="darkmode">{darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}</button>
                <div style={darkMode ? {backgroundColor: '#0F172A', borderColor: '#3d3a41'} : {}} className="container">
                    <div style={darkMode ? {backgroundColor: '#1e293b', borderColor: '#3d3a41'} : {}} className="result-box">
                        <h3 style={darkMode ? {color: '#fff'} : {}}>{text === '' ? '0' : text}</h3>
                    </div>
                    <div className="button-box">
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} onClick={clearButton}>AC</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} disabled={islem !== ''} value={'topla'} onClick={editProcess}><i className="fa-solid fa-plus"></i></button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} disabled={islem !== ''} value={'çıkar'} onClick={editProcess}><i className="fa-solid fa-minus"></i></button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} disabled={islem !== ''} value={'çarp'} onClick={editProcess}><i className="fa-solid fa-xmark"></i></button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} disabled={islem !== ''} value={'böl'} onClick={editProcess}><i className="fa-solid fa-divide"></i></button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} value={'.'} onClick={editNumber}>.</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} value={7} onClick={editNumber}>7</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} value={8} onClick={editNumber}>8</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} value={9} onClick={editNumber}>9</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} value={4} onClick={editNumber}>4</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} value={5} onClick={editNumber}>5</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} value={6} onClick={editNumber}>6</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} value={1} onClick={editNumber}>1</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} value={2} onClick={editNumber}>2</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} value={3} onClick={editNumber}>3</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} value={0} onClick={editNumber}>0</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} value={'00'} onClick={editNumber}>00</button>
                        <button style={darkMode ? {backgroundColor: '#1e293b', color:'#fff', borderColor: '#3d3a41'} : {}} onClick={() => (setComplete(true))} className="red"><i className="fa-solid fa-equals"></i></button>
                    </div>
                </div>
            </main>
            <footer style={darkMode ? {backgroundColor: '#0F172A'} : {}} className="footer">
                <p style={darkMode ? {color: '#fff'} : {}}>© 2024 Hesap Makinesi. Coded by <a style={darkMode ? {color: '#fff'} : {}} href="https://www.yasiralakus.com.tr">yasiralakus</a></p>
                <ul>
                    <li><a style={darkMode ? {backgroundColor: '#fff', color: '#0F172A'} : {}} href="https://www.instagram.com/yasiralakus/"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a style={darkMode ? {backgroundColor: '#fff', color: '#0F172A'} : {}} href="https://www.linkedin.com/in/yasiralakus/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a style={darkMode ? {backgroundColor: '#fff', color: '#0F172A'} : {}} href="https://github.com/yasiralakus"><i className="fa-brands fa-github"></i></a></li>
                    <li><a style={darkMode ? {backgroundColor: '#fff', color: '#0F172A'} : {}} href="https://yasiralakus.com.tr/"><i className="fa-solid fa-globe"></i></a></li>
                    <li><a style={darkMode ? {backgroundColor: '#fff', color: '#0F172A'} : {}} href="mailto:yasiralakus11@gmail.com"><i className="fa-regular fa-envelope"></i></a></li>
                    <li><a style={darkMode ? {backgroundColor: '#fff', color: '#0F172A'} : {}} href="https://x.com/ysroloji"><i className="fa-brands fa-twitter"></i></a></li>
                </ul>
            </footer>
        </div>
    );
}
