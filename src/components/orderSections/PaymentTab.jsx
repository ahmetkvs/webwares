import React, { useEffect, useState } from "react";
import {
  CreditCard,
  PlusCircle,
  Trash2,
  Edit,
  CheckCircle,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCards,
  deleteCard,
} from "../../redux/shoppingCart/shoppingCartActions";
import AddCardModal from "./AddCardModal";
import EditCardModal from "./EditCardModal";

function PaymentTab({ onPaymentSelect }) {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.shoppingCart.payment);
  const [isAddCardModalOpen, setAddCardModalOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [isEditCardModalOpen, setEditCardModalOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    if (cards?.length > 0 && cards[selectedCardIndex]?.id) {
      onPaymentSelect(cards[selectedCardIndex].id);
    }
  }, [selectedCardIndex, cards, onPaymentSelect]);

  const handleDeleteClick = (cardId) => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      dispatch(deleteCard(cardId));
    }
  };

  const handleEditClick = (card) => {
    setEditingCard(card);
    setEditCardModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="bg-row3sec text-white p-4 rounded-t-md font-semibold">
        Payment Methods
      </div>
      <div className="bg-white border border-row3sec p-4 rounded-b-md space-y-4">
        <button
          onClick={() => setAddCardModalOpen(true)}
          className="w-full border-2 border-dashed border-sky-600 py-4 rounded-md text-sky-600 font-semibold hover:bg-sky-50 flex items-center justify-center gap-2"
        >
          <PlusCircle className="w-5 h-5" /> Add New Card
        </button>

        {cards?.length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              Saved Cards
            </h3>
            <ul className="space-y-2">
              {cards.map((card, index) => (
                <li
                  key={card.id}
                  className={`border rounded-md p-3 flex items-center justify-between cursor-pointer relative transition-all duration-200 ${
                    selectedCardIndex === index
                      ? "border-sky-600 bg-sky-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedCardIndex(index)}
                >
                  {selectedCardIndex === index && (
                    <CheckCircle className="absolute bottom-2 right-2 text-sky-600" />
                  )}
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-gray-500" />
                    <div>
                      <span className="font-semibold text-gray-700">
                        ****-****-****-{card.card_no.slice(-4)}
                      </span>
                      <p className="text-sm text-gray-500">
                        Expires: {card.expire_month}/{card.expire_year}
                      </p>
                      <p className="text-sm text-gray-500">
                        Name: {card.name_on_card}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditClick(card)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(card.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-500">No saved cards.</p>
        )}
      </div>

      <AddCardModal
        isOpen={isAddCardModalOpen}
        onClose={() => setAddCardModalOpen(false)}
      />
      <EditCardModal
        isOpen={isEditCardModalOpen}
        onClose={() => setEditCardModalOpen(false)}
        initialValues={editingCard}
      />
    </div>
  );
}

export default PaymentTab;
