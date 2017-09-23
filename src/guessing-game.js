class GuessingGame {
	
    constructor(){}
		
    setRange(min, max) 
	{
		this.min = min;
		this.max = max;
    }

    guess()
	{
		if((this.max-this.min) % 2 == 0)
		{
			this.middle = this.min + ((this.max-this.min)/2);
		}
		
		else
		{
			this.middle =  this.min + ((this.max-this.min)/2 + 0.5);
		}
		return this.middle;
    }

    lower() 
	{
		this.max = this.middle;
    }

    greater() 
	{
		this.min = this.middle;
    }
}

module.exports = GuessingGame;
