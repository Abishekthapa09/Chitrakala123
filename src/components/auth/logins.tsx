import { useState, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'firebase/auth'; // Import Firebase authentication module
import { useFormInputs, InputName } from '../../hooks/use-form-inputs';
import { SectionWrapper } from './section-wrapper';
import { Button } from '../ui/button';
import { AuthInput } from '../ui/auth-input';
import { EmailIcon, LockIcon, SpinnerIcon } from '../icons';
import googleIcon from '../../assets/icons/google.png';

const initialState = {
  email: { id: '', value: '', isValid: false, errorMsg: '' },
  password: { id: '', value: '', isValid: false, errorMsg: '' },
};

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const { inputForm, handleInputChange, validateForm } = useFormInputs(['email', 'password']);
  const { email, password } = inputForm;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Sign in with Firebase authentication
      await auth.signInWithEmailAndPassword(email.value, password.value);
      // User successfully logged in, you can navigate or handle further actions here
      const from = location.state?.from;
      navigate(from || '/home', { replace: true });
    } catch (error) {
      setLoginError(error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper>
      <div className="text-center text-Dark_grayish_blue space-y-4">
        <h3 className="text-4xl font-bold capitalize">login to your account</h3>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-20 w-11/12 max-w-2xl">
        <div className="grid gap-12">
          {renderInputField(email, handleInputChange, 'Email', 'text')}
          {renderInputField(password, handleInputChange, 'Password', 'password')}

          <fieldset className="flex items-center justify-between mx-4">
            <AuthInput type={'checkbox'} name="persist" required={false}>
              <p className="ml-4 text-xl text-Grayish_blue font-bold hover:text-Primary/75">
                keep me logged in
              </p>
            </AuthInput>

            <Button
              type="button"
              className="text-Grayish_blue text-xl p-2 font-bold hover:text-Primary/75 focus-visible:outline-Primary">
              Recover password
            </Button>
          </fieldset>
        </div>

        {loginError && <p className="text-red-500">{loginError}</p>}

        <Button
          hasRipple
          type="submit"
          onClick={() => validateForm()}
          className="overflow-hidden text-center py-6 shadow rounded-xl font-bold bg-Primary tracking-wide">
          <span>SIGN IN</span>
        </Button>

        {/* DIVIDER */}
        <div className="relative group flex items-center justify-center gap-4 my-4">
          <span className="relative bg-Primary/50 h-px w-full">&nbsp;</span>
          {isSubmitting && (
            <SpinnerIcon className="absolute top-0 left-1/2 z-10 after:p-8 after:border-transparent after:border-l-Primary after:border-r-Primary after:!border-2" />
          )}
          <span className="absolute text-xl uppercase text-Dark_grayish_blue p-8 rounded-full bg-white">
            or
          </span>
        </div>

        <Button
          hasRipple
          rippleColor={'bg-black/25'}
          type="button"
          className="overflow-hidden flex items-center justify-center gap-8 text-Dark_grayish_blue text-center tracking-wide py-6 shadow ring-1 ring-Grayish_blue rounded-xl font-bold">
          <img src={googleIcon} alt="google icon" className="w-8 h-8" />
          <span>Continue with google</span>
        </Button>
      </form>
    </SectionWrapper>
  );
};

const renderInputField = (
  inputField: { id: string; value: string; isValid: boolean; errorMsg: string },
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  type: string
) => (
  <fieldset className="relative">
    {!inputField.isValid && (
      <p className="absolute -top-10 right-0 z-10 text-xl text-rose-600 tracking-wide">
        {inputField.errorMsg}
      </p>
    )}

    <AuthInput
      type={type}
      id={inputField.id}
      name={inputField.id}
      placeholder={placeholder}
      value={inputField.value}
      onChange={handleInputChange}
      className={`${
        !inputField.isValid
          ? 'ring-rose-500'
          : inputField.isValid
          ? 'ring-green-500'
          : ''
      }`}>
      <span className="fake-placeholder">{placeholder}</span>
      <span
        className={`absolute right-5 w-8 h-8 peer-focus-visible:fill-Primary ${
          !inputField.isValid
            ? 'fill-rose-500'
            : inputField.isValid
            ? 'fill-green-500'
            : 'fill-Grayish_blue'
        }`}>
        {placeholder === 'Email' ? <EmailIcon /> : <LockIcon />}
      </span>
    </AuthInput>
  </fieldset>
);
