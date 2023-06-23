export default function useSteps(stepNumber: number) {
  const stepsSignup = [
    {
      id: crypto.randomUUID(),
      value: 1,
      title: 'Registra tu usuario',
      active: stepNumber > 1,
    },
    {
      id: crypto.randomUUID(),
      value: 2,
      title: 'Registra tu empresa',
      active: stepNumber > 2,
    },
    {
      id: crypto.randomUUID(),
      value: 3,
      title: 'Verifica tu correo',
      active: stepNumber > 3,
    },
  ];

  return { stepsSignup };
}
