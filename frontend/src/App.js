import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardList from "./components/cardList";
import CardForm from "./components/cardForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = process.env.REACT_APP_API;

const Home = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/cards`);
      setCards(response.data);
    } catch (error) {
      toast.error("Failed to fetch cards. Please try again.");
    }
  };

  const handleCreateCard = async (newCard) => {
    if (!newCard.title || !newCard.description) {
      toast.error("Both title and description are required.");
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/api/cards`, newCard);
      setCards([...cards, response.data]);
      toast.success("Card created successfully!");
    } catch (error) {
      toast.error("Failed to create card. Please try again.");
    } finally {
      setIsModalOpen(false);
    }
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">How can we help?</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Create New Card
            </button>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 mb-6 border border-gray-300 rounded"
          />
          {filteredCards.length > 0 ? (
            <CardList cards={filteredCards} />
          ) : (
            <p className="text-center text-gray-500">No data found</p>
          )}
        </div>
      <CardForm
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateCard}
      />
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
};

export default Home;
