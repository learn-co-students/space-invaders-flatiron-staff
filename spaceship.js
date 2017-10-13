class Spaceship {
  constructor(name, crewMember, phasers, shields) {
    this.name = name
    this.crewMember = crewMember
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"

    if (crewMember.length === 0) {
      this.docked = true
    } else {
      this.docked = false
    }

    for (let i = 0; i < crewMember.length; i++) {
      crewMember[i].currentShip = this
    }
  }
}
