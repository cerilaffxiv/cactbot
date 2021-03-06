'use strict';

[{
  zoneRegex: {
    en: /^Malikah's Well$/,
    cn: /^避暑离宫马利卡大井$/,
    ko: /^말리카 큰우물$/,
  },
  timelineFile: 'malikahs_well.txt',
  triggers: [
    {
      id: 'Malikah Stone Flail',
      regex: Regexes.startsUsing({ id: '3CE5', source: 'Greater Armadillo' }),
      regexDe: Regexes.startsUsing({ id: '3CE5', source: 'Riesengürteltier' }),
      regexFr: Regexes.startsUsing({ id: '3CE5', source: 'Grand Tatou' }),
      regexJa: Regexes.startsUsing({ id: '3CE5', source: 'グレーター・アルマジロ' }),
      regexCn: Regexes.startsUsing({ id: '3CE5', source: '大犰狳' }),
      regexKo: Regexes.startsUsing({ id: '3CE5', source: '거대 아르마딜로' }),
      condition: function(data, matches) {
        return matches.target == data.me || data.role == 'healer';
      },
      response: Responses.tankBuster(),
    },
    {
      id: 'Malikah Head Toss Stack',
      regex: Regexes.headMarker({ id: '003E' }),
      response: Responses.stackOn(),
    },
    {
      id: 'Malikah Right Round',
      regex: Regexes.startsUsing({ id: '3CE7', source: 'Greater Armadillo', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3CE7', source: 'Riesengürteltier', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3CE7', source: 'Grand Tatou', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3CE7', source: 'グレーター・アルマジロ', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3CE7', source: '大犰狳', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3CE7', source: '거대 아르마딜로', capture: false }),
      infoText: {
        en: 'Melee Knockback',
        de: 'Nahkämpfer Rückstoß',
        ko: '근거리 넉백',
      },
    },
    {
      id: 'Malikah Deep Draught',
      regex: Regexes.startsUsing({ id: '4188', source: 'Pack Armadillo' }),
      regexDe: Regexes.startsUsing({ id: '4188', source: 'Rudel-Gürteltier' }),
      regexFr: Regexes.startsUsing({ id: '4188', source: 'Tatou Grégaire' }),
      regexJa: Regexes.startsUsing({ id: '4188', source: 'パック・アルマジロ' }),
      regexCn: Regexes.startsUsing({ id: '4188', source: '群落犰狳' }),
      regexKo: Regexes.startsUsing({ id: '4188', source: '무리 아르마딜로' }),
      condition: function(data) {
        return data.CanSilence();
      },
      response: Responses.interrupt('info'),
    },
    {
      id: 'Malikah Efface',
      regex: Regexes.startsUsing({ id: '3CEB', source: 'Amphibious Talos' }),
      regexDe: Regexes.startsUsing({ id: '3CEB', source: 'Wasserträger-Talos' }),
      regexFr: Regexes.startsUsing({ id: '3CEB', source: 'Talos Amphibie' }),
      regexJa: Regexes.startsUsing({ id: '3CEB', source: 'ハイドロタロース' }),
      regexCn: Regexes.startsUsing({ id: '3CEB', source: '水陆两用塔罗斯' }),
      regexKo: Regexes.startsUsing({ id: '3CEB', source: '수력 탈로스' }),
      condition: function(data, matches) {
        return matches.target == data.me || data.role == 'healer';
      },
      response: Responses.tankBuster(),
    },
    {
      id: 'Malikah High Pressure',
      regex: Regexes.startsUsing({ id: '3CEC', source: 'Amphibious Talos', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3CEC', source: 'Wasserträger-Talos', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3CEC', source: 'Talos Amphibie', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3CEC', source: 'ハイドロタロース', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3CEC', source: '水陆两用塔罗斯', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3CEC', source: '수력 탈로스', capture: false }),
      response: Responses.knockback('info'),
    },
    {
      id: 'Malikah Swift Spill',
      regex: Regexes.startsUsing({ id: '3CEF', source: 'Amphibious Talos', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3CEF', source: 'Wasserträger-Talos', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3CEF', source: 'Talos Amphibie', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3CEF', source: 'ハイドロタロース', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3CEF', source: '水陆两用塔罗斯', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3CEF', source: '수력 탈로스', capture: false }),
      response: Responses.getBehind('info'),
    },
    {
      id: 'Malikah Intestinal Crank',
      regex: Regexes.startsUsing({ id: '3CF1', source: 'Storge', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3CF1', source: 'Storge', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3CF1', source: 'Storgê', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3CF1', source: 'ストルゲー', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3CF1', source: '斯托尔戈', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3CF1', source: '스토르게', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Terminus': 'Drehscheibe',
        'Malikah\'s Gift': 'Malikahs Quelle',
        'Unquestioned Acceptance': 'Residenz der Großherzigkeit',
        'Greater Armadillo': 'Riesengürteltier',
        'Amphibious Talos': 'Wasserträger-Talos',
        'Storge': 'Storge',
        'Rhapsodic Nail': 'Keil der Liebe',
      },
      'replaceText': {
        'Stone Flail': 'Steindresche',
        'Head Toss': 'Kopfwurf',
        'Right Round': 'Rotation',
        'Flail Smash': 'Dresche',
        'Earthshake': 'Bodenbeber',
        'Efface': 'Zerstören',
        'Wellbore': 'Brunnenbohrer',
        'Geyser Eruption': 'Geysir',
        'High Pressure': 'Überdruck',
        'Swift Spill': 'Schneller Abfluss',
        'Intestinal Crank': 'Geweiderupfer',
        'Heretic\'s Fork': 'Ketzerspieß',
        'Breaking Wheel': 'Radbruch',
        'Crystal Nail': 'Kristallnagel',
        'Censure': 'Tadel',
        'Armadillo': 'Armadillo',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Terminus': '광차 종점',
        'Malikah\'s Gift': '말리카의 수원',
        'Unquestioned Acceptance': '시민 별장',
        'Greater Armadillo': '거대 아르마딜로',
        'Amphibious Talos': '수력 탈로스',
        'Storge': '스토르게',
        'Rhapsodic Nail': '사랑의 말뚝',
      },
      'replaceText': {
        'Stone Flail': '바위 타작',
        'Head Toss': '머리 겨냥',
        'Right Round': '대회전',
        'Flail Smash': '타작 충돌',
        'Earthshake': '지반 진동',
        'Efface': '파괴',
        'Wellbore': '우물 파기',
        'Geyser Eruption': '간헐천',
        'High Pressure': '고압',
        'Swift Spill': '강제 급수',
        'Intestinal Crank': '창자 비틀기',
        'Heretic\'s Fork': '이단자의 창',
        'Breaking Wheel': '파괴의 바퀴',
        'Crystal Nail': '말뚝박기',
        'Censure': '집행',
        '2x Pack Armadillo': '쫄 2마리 소환',
      },
    },
  ],
}];
