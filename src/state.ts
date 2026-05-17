import { atom, computed } from '@reatom/core';
import recommended from 'stylelint-config-recommended';
import standard from 'stylelint-config-standard';
import { DISPLAY_CONFIG, DISPLAY_OPTIONS, type Mode } from './constants';
import rulesData from './rules';
import type { RuleValue } from './rules';


type GeneratedConfig = {
  extends: 'stylelint-config-standard';
  rules: Record<string, RuleValue>;
};

const recommendedRules = recommended.rules ?? {};
const standardRules = standard.rules ?? {};

export const rules = rulesData;
export const currentStep = atom(0, 'currentStep');
export const mode = atom<Mode>(DISPLAY_OPTIONS, 'mode');
export const configRules = atom<Record<string, RuleValue>>({}, 'configRules');

export const config = computed<GeneratedConfig>(() => ({
  extends: 'stylelint-config-standard' as const,
  rules: configRules(),
}), 'config');

const isDefaultValue = (id: string, value: RuleValue) => (
  (standardRules[id] !== undefined && standardRules[id] === value)
  || (recommendedRules[id] !== undefined && recommendedRules[id] === value)
);

const advance = () => {
  if (currentStep() + 1 < rules.length) {
    currentStep.set(step => step + 1);
    return;
  }

  mode.set(DISPLAY_CONFIG);
};

export const nextStep = (id: string, value: RuleValue) => {
  if (isDefaultValue(id, value)) {
    skipStep(id);
    return;
  }

  configRules.set(prev => ({ ...prev, [id]: value }));
  advance();
};

export const prevStep = () => {
  if (currentStep() > 0) {
    currentStep.set(step => step - 1);
  }
};

export const skipStep = (id: string) => {
  configRules.set((prev) => {
    if (!(id in prev)) return prev;

    const next = { ...prev };
    delete next[id];
    return next;
  });
  advance();
};

export const resetConfig = () => {
  currentStep.set(0);
  mode.set(DISPLAY_OPTIONS);
  configRules.set({});
};
