import React, { useState, useEffect } from "react";
import EditForm from "../../components/EditForm";

const Table = ({ data }) => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // useEffect(() => {
  //   // Fetch the user data from the backend
  //   fetch('http://localhost:8000/user/')
  //     .then((response) => response.json())
  //     .then((data) => setUser(data));
  // }, []);

  const handleSave = () => {
    // TODO: Save the data to the database
  };

  const handleEditClick = () => {
    setIsEditing(true);
    console.log("isEditing ", isEditing);
  };

  const userRole = () => {
    const data = localStorage.getItem("user");
    let parsedData = JSON.parse(data);
    return parsedData.userId;
  };
  const handleUpdate = (updatedUser) => {
    // Send the updated user data to the backend
    console.log("hihihihi ", updatedUser);
    fetch(`http://localhost:8000/user/update/${updatedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        uid: userRole(),
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend if needed
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the update
        console.error("Error:", error);
      });
  };

  return (
    <table className="mt-[1rem] ml-[2rem] border-collapse border-none">
      <tbody>
        {data.map((row) => (
          <tr className="font-ubuntu shadow-md" key={row.id}>
            <td className="border-none px-4 py-2">{`${row.firstName} ${row.lastName}`}</td>
            <td className="border-none px-4 py-2">{row.id}</td>
            <td className="border-none px-4 py-2">{row.role}</td>
            <td className="border-none px-4 py-2 ">
              {isEditing ? (
                <EditForm user={row} onUpdate={handleUpdate} />
              ) : (
               
                  <button
                    onClick={handleEditClick}
                    className="bg-tertiary text-quaternary px-4 py-2 rounded border shadow-md border-quinary hover:bg-accent hover:text-background"
                  >
                    Edit
                  </button>
                
              )}

              <button
                onClick={handleSave}
                className="bg-tertiary text-quaternary px-4 py-2 rounded ml-3 border shadow-md border-quinary hover:bg-beta hover:text-background"
              >
                Delete
              </button>
              <button
                onClick={handleSave}
                className="bg-quaternary text-background px-6 py-2 rounded ml-3 shadow-md hover:bg-gamma hover:text-quaternary hover:border-quinary border"
              >
                Save
              </button> 
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
