const STORAGE_KEY = "playerProgress";

export const loadProgress = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { xp: 0, level: 1, rank: "E", rankProgress: [] };
};

export const saveProgress = (progress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const addXP = (amount) => {
  const progress = loadProgress();
  progress.xp += amount;

  while (progress.xp >= progress.level * 100) {
    progress.xp -= progress.level * 100;
    progress.level += 1;
  }

  saveProgress(progress);
  return progress;
};
