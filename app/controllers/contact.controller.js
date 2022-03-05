

module.exports = class ContactController
{
    create = async (req, res) => {
        res.send({message:"create handler"});
    };
    findAll = async (req, res) => {
        res.send({message:"find all handler"});
    };
    
   findOne = async (req, res) =>{
        res.send({message:"update handler"});
    };
    
    delete = async (req, res) =>{
        res.send({message:"delete handler"});
    };
    
    deleteAll = async (req, res) =>{
        res.send({message:"delete all handler"});
    };
    update = async (req, res) =>{
        res.send('updata');
    }
}



