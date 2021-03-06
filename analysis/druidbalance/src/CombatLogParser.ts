import ActiveDruidForm from '@wowanalyzer/druid/src/core/ActiveDruidForm';

import MainCombatLogParser from 'parser/core/CombatLogParser';

import { ConvokeSpirits } from '@wowanalyzer/druid';

import GlobalCooldown from './modules/core/GlobalCooldown';

//Features
import Checklist from './modules/features/Checklist/Module';
import AlwaysBeCasting from './modules/features/AlwaysBeCasting';
import CancelledCasts from './modules/features/CancelledCasts';
import Abilities from './modules/Abilities';
import CooldownThroughputTracker from './modules/features/CooldownThroughputTracker';
import MoonfireUptime from './modules/features/MoonfireUptime';
import SunfireUptime from './modules/features/SunfireUptime';
import UnempoweredLunarStrike from './modules/features/UnempoweredLunarStrike';
import EarlyDotRefreshes from './modules/features/EarlyDotRefreshes';
import EarlyDotRefreshesInstants from './modules/features/EarlyDotRefreshesInstants';
import BalanceOfAllThingsOpener from './modules/features/BalanceOfAllThingsOpener';
import Buffs from './modules/features/Buffs';
//Talents
import StellarFlareUptime from './modules/talents/StellarFlareUptime';
import TwinMoons from './modules/talents/TwinMoons';
import StellarDrift from './modules/talents/StellarDrift';
import Starlord from './modules/talents/Starlord';

//Resources
import AstralPowerDetails from './modules/resourcetracker/AstralPowerDetails';
import AstralPowerTracker from './modules/resourcetracker/AstralPowerTracker';
import Channeling from './modules/core/Channeling';

class CombatLogParser extends MainCombatLogParser {
  static specModules = {
    globalCooldown: GlobalCooldown,

    //Core
    activeDruidForm: ActiveDruidForm,

    //Features
    checklist: Checklist,
    alwaysBeCasting: AlwaysBeCasting,
    cancelledCasts: CancelledCasts,
    channeling: Channeling,
    abilities: Abilities,
    cooldownThroughputTracker: CooldownThroughputTracker,
    moonfireUptime: MoonfireUptime,
    sunfireUptime: SunfireUptime,
    unempoweredLunarStrike: UnempoweredLunarStrike,
    earlyDotRefreshes: EarlyDotRefreshes,
    earlyDotRefreshesInstants: EarlyDotRefreshesInstants,
    balanceOfAllThingsOpener: BalanceOfAllThingsOpener,
    buffs: Buffs,
    //Talents
    stellarFlareUptime: StellarFlareUptime,
    twinMoons: TwinMoons,
    stellarDrift: StellarDrift,
    starlord: Starlord,

    //Covenants
    convokeSpirits: ConvokeSpirits,

    //Resources
    astralPowerTracker: AstralPowerTracker,
    astralPowerDetails: AstralPowerDetails,
  };
}

export default CombatLogParser;
