import { useState, useEffect } from "react"


const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect( () => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou");
        }
    }, [])

    useEffect( () => {
        console.log("O estado nome mudou");
    }, [nome])

    useEffect(() => {
        console.log("Materia A mudou para: ", + materiaA);
    }, [materiaA, materiaB, materiaC])




    const alteraNome = (evento) => {
        // console.log(evento.target.value);
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            // console.log(estadoAnterior);
            
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        // console.log(`SOMA: ${soma}`);
        // console.log(`MEDIA: ${media}`);

        if (media >= 7) {
            return (
                <p>Olá {nome}, sua média é {media}. Você foi aprovado.</p>
            )
        } else {
            return (
                <p>Olá {nome}, sua média é {media}. Você foi reprovado.</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} /> {/*DESESTRUTURAÇÃO DO TARGET PERMITINDO SER MAIS DIRETO */}
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario