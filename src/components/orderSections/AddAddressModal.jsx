import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  addAddress,
  updateAddress,
} from "../../redux/shoppingCart/shoppingCartActions"; // Import updateAddress

export default function AddAddressModal({ isOpen, onClose, initialValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: initialValues || {}, // Set default values for editing
  });

  const dispatch = useDispatch();
  const [cities] = useState([
    "İstanbul",
    "Ankara",
    "İzmir",
    "Bursa",
    "Antalya",
    "Adana",
  ]);

  useEffect(() => {
    if (initialValues) {
      // Populate the form with initial values when editing
      Object.keys(initialValues).forEach((key) => {
        setValue(key, initialValues[key]);
      });
    } else {
      reset(); // Reset form when adding a new address
    }
  }, [initialValues, setValue, reset]);

  const onSubmit = (data) => {
    console.log("Address Data:", data);
    if (initialValues?.id) {
      // Dispatch update if we have an ID (editing)
      dispatch(updateAddress(initialValues.id, data));
    } else {
      // Dispatch add if no ID (adding new)
      dispatch(addAddress(data));
    }
    onClose();
  };

  if (!isOpen) return null;

  const modalTitle = initialValues?.id ? "Edit Address" : "Add New Address";
  const submitButtonText = initialValues?.id
    ? "Update Address"
    : "Save Address";

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white w-full max-w-lg rounded-md shadow-lg p-6 md:p-8 relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-lg"
          onClick={onClose}
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold text-sky-700 mb-4">
          {modalTitle}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Form fields - they will populate based on defaultValues or initialValues */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Address Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-sky-600"
              placeholder="e.g., Home, Work"
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>

          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-sky-600"
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Surname
              </label>
              <input
                {...register("surname", { required: "Surname is required" })}
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-sky-600"
              />
              {errors.surname && <p>{errors.surname.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Phone
            </label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-sky-600"
              placeholder="e.g., 05XXXXXXXXX"
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              City (İl)
            </label>
            <select
              {...register("city", { required: "City is required" })}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-sky-600"
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={city.toLowerCase()}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && <p>{errors.city.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              District (İlçe)
            </label>
            <input
              {...register("district", { required: "District is required" })}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-sky-600"
            />
            {errors.district && <p>{errors.district.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Neighborhood (Mahalle)
            </label>
            <input
              {...register("neighborhood", {
                required: "Neighborhood is required",
              })}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-sky-600"
            />
            {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Address Details
            </label>
            <textarea
              {...register("address", {
                required: "Detailed address is required",
              })}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-sky-600"
              rows={4}
              placeholder="Street, building, door number..."
            />
            {errors.address && <p>{errors.address.message}</p>}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded shadow"
            >
              {submitButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
