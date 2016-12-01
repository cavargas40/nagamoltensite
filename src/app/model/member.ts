export class Member {
    rank: string = '';
    character: Character;
}

export class Character {
    name: string = '';
    level: number = 0;
    spec: Spec;
}

export class Spec {
    name: string = '';
    role: string = '';
    icon: string = '';    
}
