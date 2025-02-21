// components/FormComponents.tsx
"client side";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FormData, COUNTRY_CODES } from "../constants/formsData";
import { useState } from "react";

interface FormProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PersonalDetailsForm = ({ formData, onChange }: FormProps) => (
  <div className="space-y-4 flex flex-col">
    <h2 className="text-2xl font-bold mb-6">Your Details</h2>

    <div className="space-y-2 mx-4 ">
      <label className="block ">
        Name of applicant 
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter"
        onChange={onChange}
        className="w-full px-2 py-3 border rounded-md "
      />
    </div>

    <div className="flex flex-row gap-6 w-full px-4">
      {/* Gender Dropdown */}
      <div className="flex-1 space-y-2">
        <label className="block">
          Gender 
        </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={onChange}
          className="w-full px-2  py-3 border rounded-md bg-white"
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Age Input */}
      <div className="flex-1 space-y-2">
        <label className="block">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={onChange}
          placeholder="Enter Age"
          className="w-full px-2  py-3 border rounded-md "
        />
      </div>
    </div>

    <div className="flex flex-row gap-4 w-full px-4">
      {/* Phone Number Input */}
      <div className="flex-1 space-y-2">
        <label className="block">Phone Number</label>
        <div className="flex gap-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={onChange}
            className="p-2 border rounded bg-white text-sm"
          >
            {COUNTRY_CODES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code} ({country.country})
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={onChange}
            placeholder="Enter"
            className="flex-1 w-28 p-3 border rounded"
          />
        </div>
      </div>

      {/* Email Input */}
      <div className="flex-1 space-y-2">
        <label className="block">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Enter"
          className="w-full p-3 border rounded"
        />
      </div>
    </div>

    <div className="flex flex-row gap-4 w-full px-4">
      {/* Nationality Input */}
      <div className="flex-1 space-y-2">
        <label className="block">Nationality</label>
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={onChange}
          placeholder="Enter"
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Government ID Input */}
      <div className="flex-1 space-y-2">
        <label className="block">Government ID</label>
        <input
          type="text"
          name="governmentId"
          value={formData.governmentId}
          onChange={onChange}
          placeholder="Enter"
          className="w-full p-3 border rounded"
        />
      </div>
    </div>
  </div>
);

export const AddressForm = ({ formData, onChange }: FormProps) => (
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
    </div>
  </div>
);

export const ReviewForm = ({
  formData,
  setIsConfirmed, // Accept as prop
}: {
  formData: FormData;
  setIsConfirmed: (value: boolean) => void;
}) => {
  const [isPersonalOpen, setIsPersonalOpen] = useState(true);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  // const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Review Your Information</h2>

      {/* Personal Details Section */}
      <div className="border rounded-lg">
        <button
          className="w-full text-left p-4 font-semibold bg-gray-100 rounded-t flex flex-row "
          onClick={() => setIsPersonalOpen(!isPersonalOpen)}
        >
          {isPersonalOpen ? (
            <ChevronUp className="mr-2" />
          ) : (
            <ChevronDown className="mr-2" />
          )}
          Personal Details{" "}
        </button>
        {isPersonalOpen && (
          <div className="p-4 space-y-4">
            {Object.entries({
              Name: formData.name,
              Age: formData.age,
              "Phone Number": `${formData.countryCode} ${formData.phoneNumber}`,
              Email: formData.email,
              Nationality: formData.nationality,
              "Government ID": formData.governmentId,
            }).map(([key, value]) => (
              <div key={key} className="grid grid-cols-2 gap-4">
                <span className="font-medium">{key}</span>
                <input
                  type="text"
                  value={value}
                  readOnly
                  className="p-2 border rounded bg-gray-100"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Address Details Section */}
      <div className="border rounded-lg">
        <button
          className="w-full text-left p-4 font-semibold bg-gray-100 rounded-t"
          onClick={() => setIsAddressOpen(!isAddressOpen)}
        >
          {isPersonalOpen ? (
            <ChevronUp className="mr-2" />
          ) : (
            <ChevronDown className="mr-2" />
          )}
          Address Details 
        </button>
        {isAddressOpen && (
          <div className="p-4 space-y-4">
            {Object.entries({
              Address: formData.address,
              "Postal Code": formData.postalCode,
              Country: formData.country,
            }).map(([key, value]) => (
              <div key={key} className="grid grid-cols-2 gap-4">
                <span className="font-medium">{key}</span>
                <input
                  type="text"
                  value={value}
                  readOnly
                  className="p-2 border rounded bg-gray-100"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Confirmation Checkbox */}
      <div className="flex items-center space-x-2 border-t pt-4">
        <input
          type="checkbox"
          id="confirm"
          onChange={(e) => setIsConfirmed(e.target.checked)} // Update parent state
          className="w-5 h-5"
        />
        <label htmlFor="confirm" className="text-sm">
          I confirm that all the information above is correct.
        </label>
      </div>
    </div>
  );
};
