/// AUTHER = AYUSH DALE ////
console.log(__dirname)
/// This program is use for gathring os information ///
    const os=require('os'); 
console.log('\x1b[36m%s\x1b[0m', 'Memery information');  // 
   console.log("os.freemem(): \n",os.freemem());  
console.log('\x1b[33m%s\x1b[0m', 'Home Directory information');
    console.log("os.homedir(): \n",os.homedir());  
console.log('\x1b[35m%s\x1b[0m', 'host Name information');
    console.log("os.hostname(): \n",os.hostname()); 
console.log('\x1b[31m%s\x1b[0m', 'Endianness information'); 
    console.log("os.endianness(): \n",os.endianness());  
console.log('\x1b[32m%s\x1b[0m', 'Average information');
    console.log("os.loadavg(): \n",os.loadavg());
console.log('\x1b[35m%s\x1b[0m', 'Platform information');  
    console.log("os.platform(): \n",os.platform());  
console.log('\x1b[34m%s\x1b[0m', 'Release information');
    console.log("os.release(): \n",os.release());  
console.log('\x1b[37m%s\x1b[0m', 'Temp File information');
    console.log("os.tmpdir(): \n",os.tmpdir());  
console.log('\x1b[35m%s\x1b[0m', 'Total Memery in system');    
    console.log("os.totalmem(): \n",os.totalmem());  
console.log('\x1b[31m%s\x1b[0m', 'OS Type');    
    console.log("os.type(): \n",os.type()); 
console.log('\x1b[36m%s\x1b[0m', 'Working Time of system ');     
    console.log("os.uptime(): \n",os.uptime()); 
console.log('\x1b[37m%s\x1b[0m', 'Architechture Of OS');
    console.log("os.arch(): \n",os.arch());
console.log('\x1b[33m%s\x1b[0m', 'cpu information of os');
    console.log("os.cpus(): \n",os.cpus());
console.log('\x1b[32m%s\x1b[0m', 'network Interfaces information');
    console.log("os.networkInterfaces(): \n",os.networkInterfaces());   
    