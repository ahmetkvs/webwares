import React, { useEffect, useState } from "react";
import { CheckCircle, User, Loader2, Edit, Trash } from "lucide-react";
import AddAddressModal from "./AddAddressModal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAddress,
  fetchAddresses,
  updateAddress,
} from "../../redux/shoppingCart/shoppingCartActions";

export default function AddressTab({ onAddressSelect }) {
  // Added onAddressSelect prop
  const dispatch = useDispatch();
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const addressList = useSelector((state) => state.shoppingCart.address);
  const isFetchingAddresses = addressList === undefined;

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  useEffect(() => {
    if (addressList?.length > 0 && addressList[selectedAddressIndex]?.id) {
      onAddressSelect(addressList[selectedAddressIndex].id);
    }
  }, [selectedAddressIndex, addressList, onAddressSelect]);

  const handleEditClick = (address) => {
    setEditingAddress({ ...address });
    setModalOpen(true);
  };

  const handleUpdateSubmit = (updatedData) => {
    if (editingAddress?.id) {
      dispatch(updateAddress(editingAddress.id, updatedData));
      setEditingAddress(null);
      setModalOpen(false);
    }
  };

  const handleDeleteClick = (addressId) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      dispatch(deleteAddress(addressId));
    }
  };

  return (
    <div className="flex-1">
      <div className="bg-row3sec text-white p-4 rounded-t-md font-semibold">
        Delivery Address
      </div>

      <div className="bg-white border border-row3sec p-4 rounded-b-md space-y-4">
        <button
          onClick={() => setModalOpen(true)}
          className="w-full border-2 border-dashed border-sky-600 py-4 rounded-md text-sky-600 font-semibold hover:bg-sky-50"
        >
          + Add New Address
        </button>
        <AddAddressModal
          isOpen={isModalOpen}
          onClose={() => {
            setModalOpen(false);
            setEditingAddress(null);
          }}
          initialValues={editingAddress}
          onSubmit={editingAddress?.id ? handleUpdateSubmit : null}
        />

        {isFetchingAddresses ? (
          <div className="flex justify-center items-center py-8">
            <Loader2 className="animate-spin w-6 h-6 text-sky-600" />
            <span className="ml-2 text-gray-500">Loading addresses...</span>
          </div>
        ) : addressList?.length > 0 ? (
          addressList.map((address, idx) => {
            const isSelected = selectedAddressIndex === idx;
            return (
              <div
                key={address.id}
                className={`p-4 border rounded-md cursor-pointer relative transition-all duration-200 ${
                  isSelected ? "border-sky-600 bg-sky-50" : "border-gray-300"
                }`}
                onClick={() => setSelectedAddressIndex(idx)}
              >
                {isSelected && (
                  <CheckCircle className="absolute bottom-2 right-2 text-sky-600" />
                )}
                <div className="flex items-center gap-2 mb-2 text-row1third font-medium">
                  <User className="w-4 h-4" />
                  {address.title}
                </div>
                <div className="text-sm text-gray-700 leading-5">
                  {address.name} {address.surname} – {address.phone}
                  <br />
                  {address.neighborhood}, {address.district}, {address.city}
                </div>
                <div className="absolute top-2 right-2 space-x-2">
                  <button onClick={() => handleEditClick(address)}>
                    <Edit className="w-4 h-4 text-gray-500 hover:text-sky-600" />
                  </button>
                  <button onClick={() => handleDeleteClick(address.id)}>
                    <Trash className="w-4 h-4 text-gray-500 hover:text-red-600" />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-8 text-gray-500 text-center">
            No addresses available.
          </div>
        )}
      </div>
    </div>
  );
}
