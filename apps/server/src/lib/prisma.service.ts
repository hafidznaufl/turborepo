import { PrismaClient } from '@repo/database';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async disconnect() {
    await this.$disconnect();
  }
}
