"client side";
import { FormData,  } from "../constants/formsData";

interface FormProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
}

export const AddressForm = ({
  formData,
  onChange,
  errors,
}: FormProps & { errors: Record<string, string> }) => {
  // Log errors if they exist
  if (Object.keys(errors).length > 0) {
    console.log("Form errors:", errors);
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Address Details</h2>

      <div className="space-y-2">
        <label className="block">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
        <div className="h-1">
          {errors.address && (
            <p className="text-red-500 text-xs">{errors.address}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
        <div className="h-1">
          {errors.postalCode && (
            <p className="text-red-500 text-xs">{errors.postalCode}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block">Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
        <div className="h-1">
          {errors.country && (
            <p className="text-red-500 text-xs">{errors.country}</p>
          )}
        </div>
      </div>
    </div>
  );
};