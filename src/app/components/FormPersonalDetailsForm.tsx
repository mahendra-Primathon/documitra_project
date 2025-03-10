"client side";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FormData, COUNTRY_CODES } from "../constants/formsData";
import { useState } from "react";

interface FormProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
}
export const PersonalDetailsForm = ({
  formData,
  onChange,
  errors,
}: FormProps & { errors: Record<string, string> }) => (
  <div className="space-y-4 flex flex-col">
    <h2 className="text-2xl font-bold mb-6">Your Details</h2>

    <div className="space-y-2 mx-4 ">
      <label className="block ">Name of applicant</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter"
        onChange={onChange}
        className="w-full px-2 py-3 border rounded-md "
      />
      <div className="h-1">
        {errors.name && <p className="text-red-500 text-sm ">{errors.name}</p>}
      </div>
    </div>

    {/* Gender and Age - Stack vertically on mobile, row on larger screens */}
    <div className="flex flex-col md:flex-row gap-6 w-full px-4">
      {/* Gender Dropdown */}
      <div className="flex-1 space-y-2">
        <label className="block">Gender</label>
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
        <div className="h-1">
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
        </div>
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
          className="w-full px-2  py-3 border rounded-md hide-number-spinners "
        />
        <div className="h-1">
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
      </div>
    </div>

    {/* Phone Number and Email - Stack vertically on mobile, row on larger screens */}
    <div className="flex flex-col md:flex-row gap-4 w-full px-4">
      {/* Phone Number Input */}
      <div className="flex-1 space-y-2 w-full md:w-[50%]">
        <label className="block">Phone Number</label>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col md:flex-row w-full gap-1">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={onChange}
              className="p-2 border rounded bg-white text-sm w-full md:w-[30%]"
            >
              {COUNTRY_CODES.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code} ({country.country})
                </option>
              ))}
            </select>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={onChange}
              placeholder="Enter"
              className="p-3 border rounded flex-1 hide-number-spinners"
            />
          </div>
          <div className="h-1">
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>
        </div>
      </div>

      {/* Email Input */}
      <div className="flex-1 space-y-2 w-full md:w-[50%]">
        <label className="block">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Enter"
          className="w-full p-3 border rounded"
        />
        <div className="h-1">
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
      </div>
    </div>

    {/* Nationality and Government ID - Stack vertically on mobile, row on larger screens */}
    <div className="flex flex-col md:flex-row gap-4 w-full px-4">
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
        <div className="h-1">
          {errors.nationality && (
            <p className="text-red-500 text-sm">{errors.nationality}</p>
          )}
        </div>
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
        <div className="h-1">
          {errors.governmentId && (
            <p className="text-red-500 text-sm">{errors.governmentId}</p>
          )}
        </div>
      </div>
    </div>
  </div>
);
