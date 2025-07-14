class DrumMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: "Drum machine"
      }
      this.audio = {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open HH",
    Z: "Kick n' Hat",
    X: "Kick",
    C: "Closed HH"
  }
      
      this.player = this.player.bind(this)
      this.handleKeyDown = this.handleKeyDown.bind(this)
      this.nameAudio = this.nameAudio.bind(this)
    }
    
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown)
    }
    
    handleKeyDown = e => {
      const idEl = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]
      if (idEl.includes(e.key.toUpperCase())) {
        this.player(e.key.toUpperCase())
      }
    }
    
    player(id) {
        document.getElementById(id).play()
      this.nameAudio(id)
    }
    
    nameAudio(id) {
    this.setState({
      message: this.audio[id]
    });
  }
    
    render() {
      return (
        <div id="drum-machine">
          <div id="display"> <div id="result">{this.state.message}</div>
            <div id="btn-display">
            <button onClick={() => this.player("Q")} 
               className="drum-pad" id="heater-1">Q
              <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" className="clip" id="Q"></audio>
            </button>
            
            <button onClick={() => this.player("W")} className="drum-pad" id="heater-2">W
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" className="clip" id="W"></audio>
            </button>
            
            <button onClick={() => this.player("E")} className="drum-pad" id="heater-3">E
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" className="clip" id="E"></audio></button>
            
            <button onClick={() => this.player("A")} className="drum-pad" id="heater-4">A
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" className="clip" id="A"></audio>
            </button>
            
            <button onClick={() => this.player("S")} className="drum-pad" id="clap">S
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" className="clip" id="S"></audio>
            </button>
            
            <button onClick={() => this.player("D")} className="drum-pad" id="open-hh">D
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" className="clip" id="D"></audio>
            </button>
            
            <button onClick={() => this.player("Z")} className="drum-pad" id="kick-n-hat">Z
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
            </button>
            
            <button onClick={() => this.player("X")} className="drum-pad" id="kike">X
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" className="clip" id="X"></audio>
            </button>
            
            <button onClick={() => this.player("C")} className="drum-pad" id="closed-hh">C
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" className="clip" id="C"></audio>
            </button>
          </div>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(<DrumMachine />, document.getElementById("app"));
  