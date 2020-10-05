using System.Collections.Generic;
using System.Threading;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.NeverHaveIEverGame
{
    public class List
    {
        public class Query : IRequest<List<NeverHaveIEver>> { }

        public class Handler : IRequestHandler<Query, List<NeverHaveIEver>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }

            public async System.Threading.Tasks.Task<List<NeverHaveIEver>> Handle(Query request,
                CancellationToken cancellationToken)
            {
                var neverHaveIEver = await _context.NeverHaveIEverQuestions.ToListAsync();
                return neverHaveIEver;
            }
        }
    }
}