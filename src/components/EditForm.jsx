import React, { useState } from 'react';

const EditForm = ({ user, onUpdate }) => {
    const [fname, setFname] = useState(user.firstName);
    const [lname, setLname] = useState(user.lastName);
    const [role, setRole] = useState(user.role);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an updatedUser object with the new values
        const updatedUser = {
            firstName: fname,
            lastName:lname,
            role: role,
            id: user.id
        };

        // Call the onUpdate function with the updatedUser object
        onUpdate(updatedUser);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
            </label>
            <label>
                Role:
                <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
            </label>
            <button type="submit">Update</button>
        </form>
    );
};

export default EditForm;
