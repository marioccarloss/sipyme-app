import { Link } from 'react-router-dom';
import Steps from 'components/molecules/Steps';
import Label from 'components/atoms/Label';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import ButtonBack from 'components/atoms/ButtonBack';
import useSignupForm from 'hooks/useSignupForm';
import { memo } from 'react';
import TypeDocument from 'types/TypeDocument';
import IconArrow from 'components/atoms/icons/IconArrow';

function SignupForm() {
  const {
    step,
    setStep,
    signupForm,
    handleSubmit,
    hasManyInputs,
    hasManyRadios,
    buttonName,
    errorMessage,
    successMessage,
  } = useSignupForm();

  return (
    <div>
      <Steps stepNumber={step} />

      <div className="w-full sm:max-w-2xl sm:mx-auto">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <form
            id="regiterUser"
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit}
          >
            <div
              className={`grid gap-2 lg:gap-4 ${
                hasManyInputs
                  ? 'lg:grid-cols-[repeat(2,minmax(0,1fr))]'
                  : 'lg:grid-cols-[repeat(1,minmax(0,1fr))]'
              }`}
            >
              <div
                className={`grid gap-2 lg:gap-4 lg:grid-cols-[repeat(2,minmax(0,1fr))] ${
                  hasManyRadios ? 'grid col-span-2' : 'hidden'
                }`}
              >
                {signupForm
                  ?.filter((item) => item.step === step)
                  ?.map((item) =>
                    item.radios?.map((radio) => (
                      <div
                        key={radio.index}
                        className="flex items-center pl-4 border border-gray-200 rounded"
                      >
                        <input
                          id={radio.id}
                          type={radio.type}
                          value={radio.value}
                          name="radio-enterprise"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-red-100 focus:ring-blue-500"
                          onChange={radio.onChange}
                        />
                        <Label
                          htmlFor={radio.id}
                          className="w-full py-4 ml-2 text-sm font-medium text-gray-900 mb-0"
                        >
                          {radio.label}
                        </Label>
                      </div>
                    ))
                  )}
              </div>

              {signupForm
                ?.filter((item) => item.step === step)
                ?.map((item) =>
                  item.selects?.map((select) => (
                    <div
                      key={select.index}
                      className={`${hasManyInputs ? '' : 'col-span-2'}`}
                    >
                      <Label htmlFor={select.id}>{select.label}</Label>
                      <select
                        className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 "
                        name={select.name}
                        id={select.id}
                        required
                        value={select.value}
                        onChange={select.onChange}
                      >
                        <option value="" hidden>
                          {select.label}
                        </option>
                        {select.options?.map((option: TypeDocument) => (
                          <option key={option.id} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))
                )}

              {signupForm
                ?.filter((item) => item.step === step)
                ?.map((item) =>
                  item.inputs
                    .filter((input) => input.show)
                    .map((input) => (
                      <div
                        key={input.index}
                        className={`${hasManyInputs ? '' : 'col-span-2'}`}
                      >
                        <Label htmlFor={input.id}>{input.label}</Label>
                        <Input
                          type={input.type}
                          name={input.name}
                          id={input.id}
                          placeholder={input.placeholder}
                          required
                          pattern={input.pattern ?? ''}
                          maxLength={input.maxLength ?? 1000}
                          value={input.value}
                          autoComplete={input.autoComplete}
                          onChange={input.onChange}
                        />
                      </div>
                    ))
                )}
              {step === 1 && (
                <Button type="submit" className="mt-1 col-span-2">
                  <span>{buttonName}</span>
                </Button>
              )}

              {step > 1 && step < 4 && (
                <div className="mt-1 col-span-2 flex gap-4">
                  <ButtonBack handle={() => setStep(step - 1)} />
                  <Button type="submit">
                    <span>{buttonName}</span>
                  </Button>
                </div>
              )}
              <Link
                to="/signin"
                className="text-center col-span-2 font-semibold text-red-600 hover:text-red-500 hover:underline"
              >
                <span className="flex items-center justify-center">
                  <IconArrow className="rotate-180" />
                  Regresa al incio de sesión
                </span>
              </Link>

              {errorMessage !== undefined &&
                errorMessage.length > 0 &&
                errorMessage
                  ?.filter((error) => error !== undefined)
                  ?.map((error) => (
                    <div
                      key={error.length}
                      className="w-full bg-red-100 border border-red-200 text-sm text-red-500 rounded-md shadow-m mt-2 col-span-2"
                    >
                      <div className="flex p-4">{error}</div>
                    </div>
                  ))}
              {successMessage && (
                <div className="w-full bg-green-100 border border-green-200 text-sm text-green-500 rounded-md shadow-md col-span-2">
                  <div className="flex p-4">{successMessage}</div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(SignupForm);
