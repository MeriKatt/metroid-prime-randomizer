export interface RandomizerForm {
  generationCount?: number;
  romSettings: {
    skipFrigate: boolean;
    skipHudPopups: boolean;
    hideItemModels: boolean;
  };
  rules: {
    goal: string;
    goalArtifacts: number;
    artifactLocationHints: boolean;
    elevatorShuffle: boolean;
    heatProtection: string;
    suitDamageReduction: string;
    startingArea: number;
  };
  items: {
    randomStartingItems: {
      min: number;
      max: number;
    };
    itemOverrides: ItemOverride[];
  };
  excludeLocations: string[];
  tricks: string[];
}

interface ItemOverride {
  state: string;
  shuffle: number;
}
