using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.NeverHaveIEverGame;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NeverHaveIEverController : ControllerBase
    {
        private readonly IMediator _mediator;
        public NeverHaveIEverController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet]
        public async Task<ActionResult<List<NeverHaveIEver>>> List()
        {
            return await _mediator.Send(new List.Query());
        }
    }
}