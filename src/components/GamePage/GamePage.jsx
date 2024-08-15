import { Container, Button, Image, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { AnimatedProgressBar } from '../ProgressBar/ProgressBar';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../auth/context/UserContext';
import { useState } from 'react';
import { listOfPlays } from '../../constants/users';
import './GamePage.css';

export const GamePage = () => {
    const { getUser, userEarnPoints, setPointsToListUsers } = useContext(UserContext);
    const { userName, points } = getUser();
    const [turn, setTurn] = useState("you");
    const [yourSelection, setYourSelection] = useState("");
    const [botSelection, setBotSelection] = useState("");
    const [resultOfGame, setResultOfGame] = useState("");
    const navigate = useNavigate();

    const onBack = () => {
        navigate('/home');
    }

    const playAgain = () => {
        setTurn("you");
    }

    const play = (hand) => {
        setYourSelection(hand);
        setTurn("bot");

        const resultOfBot = listOfPlays[Math.floor((Math.random() * listOfPlays.length))];
        setBotSelection(resultOfBot);

        if (hand === resultOfBot) return setResultOfGame("TIE!");
        if (hand === "rock" && resultOfBot === "scissors" ||
            hand === "paper" && resultOfBot === "rock" ||
            hand === "scissors" && resultOfBot === "paper") {
            return setResultOfGame("YOU WIN!");
        } else {
            setResultOfGame("YOU LOSE!");
        }
    };

    const onResults = () => {
        setTimeout(() => {
            setTurn("result");
            if (transformResultOfGame() === "win") {
                userEarnPoints();
                setPointsToListUsers(getUser());
            }

        }, 1000);
    };

    const turnTemplate = (turn) => {
        switch (turn) {
            case "you":
                return yourTurnTemplate();
            case "bot":
                return turnBotTemplate();
            case "result":
                return resultOfGameTemplate();
        }
    };

    const yourTurnTemplate = () => {
        return (
            <>
                <Row>
                    <Col>
                        <button className="button-rock" onClick={() => play("rock")}><Image className="game-images rock" thumbnail src="assets/rock.png" /></button>
                        <button className="button-paper" onClick={() => play("paper")}><Image className="game-images paper" thumbnail src="assets/paper.png" /></button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button className="button-scissors" onClick={() => play("scissors")}><Image className="game-images scissors" thumbnail src="assets/scissors.png" /></button>
                    </Col>
                </Row>
            </>
        )
    };

    const turnBotTemplate = () => {
        return (
            <div className="progress-bot">
                <AnimatedProgressBar onComplete={onResults} timeToComplete={10} />
            </div>
        )
    };

    const resultOfGameTemplate = () => {
        return (
            <>
                <h3 className="your-chosen">You has chosen: {yourSelection}</h3>
                <h3 className="bot-chosen">Bot has chosen: {botSelection}</h3>
                <h1 className={`result result-${transformResultOfGame()}`}>{resultOfGame}</h1>
            </>
        )
    };

    const turnText = (turn) => {
        if (turn === "you") return "Your turn!";
        if (turn === "bot") return "Bot turn!";
        if (turn === "result") return "Result of game:";
        return "";
    };

    const transformResultOfGame = () => {
        return resultOfGame.slice(-5).trim().replace("!", '').toLocaleLowerCase();
    };

    return (
        <>
            <Navbar userName={userName} points={points} />
            <Container className="container-game" fluid>
                <div className="game-buttons">
                    <div className="turn">
                        {turnText(turn)}
                    </div>
                    {turnTemplate(turn)}
                    {
                        turn === "result" ?
                            <Button
                                onClick={playAgain}
                                className="play-again"
                                size="lg"
                                variant="danger">
                                Play again
                            </Button>
                            : <></>
                    }
                </div>
            </Container>
            <Button onClick={onBack} className="button-back" size="lg" variant="dark">Exit</Button>
        </>
    )
}