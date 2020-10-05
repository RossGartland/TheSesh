using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.NeverHaveIEverQuestions.Any()) //Checks that there is no questions in the DB.
            {
                var nHIEQuestions = new List<NeverHaveIEver>//Questions to be seeded into DB.
                {
                    new NeverHaveIEver
                    {
                        Question = "Never have I ever x"
                    },
                    new NeverHaveIEver
                    {
                        Question = "Never have I ever y"
                    },
                    new NeverHaveIEver
                    {
                        Question = "Never have I ever i"
                    },
                    new NeverHaveIEver
                    {
                        Question = "Never have I ever j"
                    },
                    new NeverHaveIEver
                    {
                        Question = "Never have I ever k"
                    }
                };
                context.NeverHaveIEverQuestions.AddRange(nHIEQuestions);
                context.SaveChanges();
            }
        }
    }
}