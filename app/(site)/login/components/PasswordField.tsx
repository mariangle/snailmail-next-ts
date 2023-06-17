import { useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form"
import { HiEye, HiEyeOff } from "react-icons/hi";

interface PasswordFieldProps {
    id : string,
    label : string,
    required? : boolean,
    register: UseFormRegister<FieldValues>,
}

const PasswordField : React.FC<PasswordFieldProps> = ({
    id, label, register, required
}) => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="password" className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          {...register(id, { required })} 
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none text-sm"
          >
            {showPassword ? <HiEye />: <HiEyeOff />}
          </button>
      </div>
    </div>
  );
};

export default PasswordField;
