import { Scenario, Language } from '../types';

export function getLocalizedScenario(scenario: Scenario, language: Language): Scenario {
  if (language === 'english' || !scenario.translations || !scenario.translations[language]) {
    return scenario;
  }

  const translation = scenario.translations[language]!;

  return {
    ...scenario,
    title: translation.title || scenario.title,
    saathiIntro: translation.saathiIntro || scenario.saathiIntro,
    saathiPrompt: translation.saathiPrompt || scenario.saathiPrompt,
    successMessage: translation.successMessage || scenario.successMessage,
    successExplanation: translation.successExplanation || scenario.successExplanation,
    content: translation.content || scenario.content,
    correctAction: scenario.correctAction,
    correctActionLabel: translation.correctActionLabel || scenario.correctActionLabel,
    wrongActions: scenario.wrongActions.map(action => {
      const translatedAction = translation.wrongActions?.find(wa => wa.id === action.id);
      if (translatedAction) {
        return {
          ...action,
          label: translatedAction.label || action.label,
          alertTitle: translatedAction.alertTitle,
          alertMessage: translatedAction.alertMessage,
          explanation: translatedAction.explanation,
        };
      }
      return action;
    }),
  };
}
