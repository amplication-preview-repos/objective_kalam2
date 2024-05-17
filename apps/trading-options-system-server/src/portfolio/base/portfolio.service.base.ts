/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Portfolio as PrismaPortfolio,
  User as PrismaUser,
} from "@prisma/client";

export class PortfolioServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PortfolioCountArgs, "select">
  ): Promise<number> {
    return this.prisma.portfolio.count(args);
  }

  async portfolios<T extends Prisma.PortfolioFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PortfolioFindManyArgs>
  ): Promise<PrismaPortfolio[]> {
    return this.prisma.portfolio.findMany<Prisma.PortfolioFindManyArgs>(args);
  }
  async portfolio<T extends Prisma.PortfolioFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PortfolioFindUniqueArgs>
  ): Promise<PrismaPortfolio | null> {
    return this.prisma.portfolio.findUnique(args);
  }
  async createPortfolio<T extends Prisma.PortfolioCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PortfolioCreateArgs>
  ): Promise<PrismaPortfolio> {
    return this.prisma.portfolio.create<T>(args);
  }
  async updatePortfolio<T extends Prisma.PortfolioUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PortfolioUpdateArgs>
  ): Promise<PrismaPortfolio> {
    return this.prisma.portfolio.update<T>(args);
  }
  async deletePortfolio<T extends Prisma.PortfolioDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PortfolioDeleteArgs>
  ): Promise<PrismaPortfolio> {
    return this.prisma.portfolio.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.portfolio
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}