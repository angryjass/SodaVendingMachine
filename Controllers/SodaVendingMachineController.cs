using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SodaVendingMachine.Repositories;

namespace SodaVendingMachine.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SodaVendingMachineController : ControllerBase
    {
        SodaVendingMachine.Repositories.SVMRepository _svmRepository;
        public SodaVendingMachineController()
        {
            _svmRepository = new SVMRepository();
        }

        [HttpGet("getsodastorage")]
        public IActionResult GetSodaStorage()
        {
            try
            {
                return Ok(_svmRepository.GetSodaStorage());
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }            
        }

        [HttpGet("getcoinsstorage")]
        public IActionResult GetCoinsStorage()
        {
            try
            {
                return Ok(_svmRepository.GetCoinsStorage());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}