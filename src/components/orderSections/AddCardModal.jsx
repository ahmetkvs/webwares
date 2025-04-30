import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/shoppingCart/shoppingCartActions";

export default function AddCardModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const expireMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const currentYear = new Date().getFullYear();
  const expireYears = Array.from({ length: 10 }, (_, i) => currentYear + i);

  const onSubmit = (data) => {
    console.log("Card Data to Add:", data);
    dispatch(addCard(data));
    onClose();
    reset();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white w-full max-w-md rounded-md shadow-lg p-6 md:p-8 relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-lg"
          onClick={onClose}
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold text-sky-700 mb-4">
          Add New Card
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Card Number
            </label>
            <input
              {...register("card_no", {
                required: "Card number is required",
                pattern: {
                  value: /^\d{16}$/,
                  message: "Card number must be 16 digits",
                },
              })}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-sky-600"
              placeholder="XXXX-XXXX-XXXX-XXXX"
            />
            {errors.card_no && (
              <p className="text-red-500 text-xs italic">
                {errors.card_no.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Name on Card
            </label>
            <input
              {...register("name_on_card", {
                required: "Name on card is required",
              })}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-sky-600"
              placeholder="e.g., Ali Baş"
            />
            {errors.name_on_card && (
              <p className="text-red-500 text-xs italic">
                {errors.name_on_card.message}
              </p>
            )}
          </div>

          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Expiry Month
              </label>
              <select
                {...register("expire_month", {
                  required: "Expiry month is required",
                })}
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-sky-600"
              >
                <option value="">Month</option>
                {expireMonths.map((month) => (
                  <option key={month} value={month}>
                    {month < 10 ? `0${month}` : month}
                  </option>
                ))}
              </select>
              {errors.expire_month && (
                <p className="text-red-500 text-xs italic">
                  {errors.expire_month.message}
                </p>
              )}
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Expiry Year
              </label>
              <select
                {...register("expire_year", {
                  required: "Expiry year is required",
                })}
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-sky-600"
              >
                <option value="">Year</option>
                {expireYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {errors.expire_year && (
                <p className="text-red-500 text-xs italic">
                  {errors.expire_year.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded shadow"
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
