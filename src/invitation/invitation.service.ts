import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

type CreateInvitation = {
  invitedUserId: string;
  userId: string;
  workspaceId: number;
};

@Injectable()
export class InvitationService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.invitation.findMany();
  }

  async getOne(where: Prisma.InvitationWhereUniqueInput) {
    return this.prisma.invitation.findUnique({
      where,
    });
  }

  async create(data: CreateInvitation) {
    return this.prisma.invitation.create({
      data: {
        invitedUserId: data.invitedUserId,
        userId: data.userId,
        workspaceId: data.workspaceId,
      },
    });
  }

  async update(
    where: Prisma.InvitationWhereUniqueInput,
    data: Prisma.InvitationUpdateManyMutationInput,
  ) {
    return this.prisma.invitation.update({ where, data });
  }

  async delete(where: Prisma.InvitationWhereUniqueInput) {
    return this.prisma.invitation.delete({ where });
  }
}
