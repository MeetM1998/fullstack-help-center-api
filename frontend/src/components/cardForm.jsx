import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CardForm = ({ isOpen, onRequestClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!title || !description) {
      toast.error("Both title and description are required.");
      return;
    }
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white w-full max-w-lg mx-auto rounded-lg p-6 relative">
        <h2 className="text-xl font-bold mb-4">Create Card</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Create
          </button>
          <button
            onClick={onRequestClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
        <button
          onClick={onRequestClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CardForm;
