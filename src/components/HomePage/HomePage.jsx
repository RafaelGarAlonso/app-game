import { Container, Stack, Form, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../auth/context/UserContext';
import './HomePage.css';

export const HomePage = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const { setNewUserSession, getListOfUsers, setNewListOfUsers } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!getListOfUsers()) setNewListOfUsers();
    }, [getListOfUsers, setNewListOfUsers]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newErrors = findFormErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            const newUser = { userName: form.username, points: 0 }
            const isNewUser = setNewUserSession(newUser);

            if (isNewUser) setNewListOfUsers(getListOfUsers().concat(newUser));

            setTimeout(() => {
                navigate('/game');
            }, 25);
        }
    };

    const findFormErrors = () => {
        const { username } = form;
        const newErrors = {};
        if (!username || username.trim() === '') newErrors.username = 'Please enter a valid name';
        return newErrors;
    };

    const setField = (field, value) => {
        setForm({ ...form, [field]: value });
        if (errors[field]) {
            setErrors({ ...errors, [field]: null })
        };
    };

    const loadScoreTable = () => {
        navigate('/score-table');
    }

    return (
        <>
            <Container className="container-home" fluid>
                <h1 className="profile">Create a profile or resume your game</h1>
                <Image className="login-user" src="assets/user.png" roundedCircle />
                <Stack gap={2} className="col-md-5 mx-auto m-4">
                    <Form className="form" onSubmit={onFormSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                className="form-input"
                                onChange={e => setField('username', e.target.value)}
                                type="text"
                                maxLength={12}
                                placeholder="Name"
                                isInvalid={!!errors.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                            <label htmlFor="floatingInputCustom">Enter a name</label>
                        </Form.Floating>
                        <Button className="form-button" variant="primary" type="submit">
                            Start
                        </Button>
                    </Form>
                </Stack>

            </Container>
            <Button onClick={loadScoreTable} className="button-score-table" size="lg" variant="info">Score Table</Button>
        </>
    )
}